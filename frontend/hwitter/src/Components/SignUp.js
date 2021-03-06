import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiUrl";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import { signUp } from "../Util/firebaseFunction";
import { storage } from "../Util/firebase";
import "../Css/SignUp.css";

const SignUp = () => {
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  const API = apiURL();

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (types.every((type) => image.type !== type)) {
      alert(`${image.type} is not a supported format`);
    } else {
      setImageAsFile((imageFile) => image);
    }
  };

  const handleFirebasePictureUpload = async () => {
    if (imageAsFile === "") {
      alert(`Please choose a valid file before uploading`);
    } else if (imageAsFile !== null) {
      const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          var progress =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          console.log(snapShot);
        },
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setImageAsUrl(fireBaseUrl);
              signUpUser(fireBaseUrl);
            });
        }
      );
    }
  };
  const signUpUser = async (fireBaseUrl) => {
    try {
      debugger
      let res = await signUp(email, password);
      await axios.post(`${API}/users`, {
        id: res.user.uid,
        email,
        firstname,
        lastname,
        imgurl: fireBaseUrl,
      });
      debugger
      history.push("/users");
    } catch (error) {
      setError(error.message);
      console.log("ALERT", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleFirebasePictureUpload();
  };
  const imgWandH = {
    width: "43.9px",
    height: "44.9px",
    // marginLeft: "184px",
  };

  return (
    <div className="signUpContainer container">
      <div className="container signUpForm">
      <div className="row signUpHeader justify-content-center">
      <img
        alt="twitter logo on modal"
        src={Logo}
        style={imgWandH}
        id="twitterLogo"
      />
      <h5 className="hwitterTitleSignUp" id="signUpTitle">
        Sign Up to Hwitter
      </h5>
      </div>

      <div className="body signUpBody justify-content-center">
        {error ? <div className="errorSignUp">{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="firstName"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.currentTarget.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="lastName"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => {
                setLastName(e.currentTarget.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleFormControlFile1">Upload Profile Picture</label>
            <input
              type="file"
              className="form-control-file"
              onChange={handleImageAsFile}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              autoComplete="on"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary signUpSubmitBtn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
