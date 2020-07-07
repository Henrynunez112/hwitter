import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiUrl";
import "../Css/SignUp.css";
import { signUp } from "../Util/firebaseFunction";
import Modal from "react-modal";

const SignUp = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  const API = apiURL();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);
      await axios.post(`${API}/api/users`, { id: res.user.uid, email });
      debugger;
      history.push("/");
    } catch (error) {
      setError(error.message);
      console.log("ALERT", error.message);
    }
  };

  return (
    <div className="signUpContainer">
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false}>
        
        <h1>This is the sign up page</h1>
        <button type="submit">Sign Up</button>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="on"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </form>
      </Modal>
    </div>
  );
};

export default SignUp;
