import React, { useState } from "react";
import axios from "axios";
import Homebutton from "./Homebutton";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiUrl";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import "../Css/SignUp.css";
import { signUp } from "../Util/firebaseFunction";
import Modal from "react-modal";
import { storage } from "../Util/firebase";

const SignUp = () => {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [toggleUploadMsg, setToggleUploadMsg] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true);
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
  const handleFirebasePictureUpload = () => {
  
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
            });
        }
      );
      setToggleUploadMsg(true);
    } else {
      setToggleUploadMsg(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);
      await axios.post(`${API}/users`, {
        id: res.user.uid,
        email,
        firstname,
        lastname,
      });
    
      history.push("/users");
    } catch (error) {
      setError(error.message);
      console.log("ALERT", error.message);
    }
  };
  const imgWandH = {
    width: "32px",
    height: "32px",
    marginLeft: "184px",
  };

  return (
    <div className="signUpContainer">
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: "rgb(0,0,0, 0.5)",
          },
          content: {
            backgroundColor: "#15212b",
            color: "#E1E8ED",
            top: "51px",
            bottom: "80px",
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
          <div className="modalHeader">
            <div className="signUpLogo">
              <img alt="twitter logo on modal" src={Logo} style={imgWandH} />
            </div>
            <div className="signUpNextBttn">
              <input type="submit" value="next" id="nextBttn" />
            </div>
          </div>
          <div className="signUpTitle">
            <h3>Create an account</h3>
          </div>
          <div className="signUpEmailContainer">
            <div className="signUpEmail">
              <label className="emailLabel">First Name</label>
            </div>
            <input
              type="text"
              id="inputSignUpEmail"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.currentTarget.value);
              }}
            />
          </div>
          <br></br>
          <div className="signUpEmailContainer">
            <div className="signUpEmail">
              <label className="emailLabel">Last Name</label>
            </div>
            <input
              type="text"
              id="inputSignUpEmail"
              value={lastname}
              onChange={(e) => {
                setLastName(e.currentTarget.value);
              }}
            />
          </div>
          <br></br>
          <div className="signUpEmailContainer">
            <div className="signUpEmail">
              <label className="emailLabel">Email</label>
            </div>
            <input
              type="text"
              id="inputSignUpEmail"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <div className="signUpProfilePictureContainer">
            <div className="profilePictureContainer">
              <label className="uploadImgUpload">Upload Img</label>
            </div>
            <input type="file" onChange={handleImageAsFile} />
            <button onClick={handleFirebasePictureUpload}>Upload</button>
            {toggleUploadMsg ? <h5>Upload successful!</h5> : null}
          </div>
          <br></br>
          <div className="signUpPasswordContainer">
            <div className="signUpPassword">
              <label className="passwordLabel">Password</label>
            </div>
            <input
              type="password"
              id="inputSignUpPassword"
              autoComplete="on"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
        </form>
        <div>
          <Homebutton />
        </div>
      </Modal>
    </div>
  );
};

export default SignUp;
