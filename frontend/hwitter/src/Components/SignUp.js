import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiUrl";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
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
  const imgWandH = {
    width: "32px",
    height: "32px",
  };

  return (
    <div className="signUpContainer">
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "rgb(0,0,0, 0.5)",
          },
          content: {
            backgroundColor: "#15212b",
            color: "#E1E8ED",
            top: "51px",
            bottom: "50px",
            left: "350px",
            right: "350px",
            border: "1px solid #15212b",
            borderRadius: "15px",
            boxShadow: "0 6px 20px 0 rgba(255, 255, 255, 0.8)",
          },
        }}
      >
        {error ? <div className="errorSignUp">{error}</div> : null}
        <form onSubmit={handleSubmit} className="formSignUp">
          <div className="signUpLogo">
            <img alt="twitter logo on modal" src={Logo} style={imgWandH} />
          </div>
          <div className="signUpNextBttn">
            <input type="submit" value="next" />
          </div>
          <div className="signUpTitle">
            <h3>Create an account</h3>
          </div>
          <div className="signUpEmailContainer">
            <div className="signUpEmail">
              <label>Email</label>
            </div>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <div className="signUpPasswordContainer">
            <div className="signUpPassword">
              <label>Password</label>
            </div>
            <input
              type="password"
              placeholder="password"
              autoComplete="on"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SignUp;
