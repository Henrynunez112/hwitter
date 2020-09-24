import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { apiURL } from "../Util/apiUrl";
import moment from "moment";
import "../Css/EditPost.css";

const EditPost = ({ post, closeModal, fetchPosts }) => {
  const [content, setContent] = useState("");
  const {currentUser} = useContext(AuthContext)
  const API = apiURL();

  const editPost = async (e) => {
    e.preventDefault();
    try{
      await axios.patch(`${API}/hweets/${currentUser.uid}/${post.id}`, {
        content,
        time_stamp: moment().calendar()
      });
      fetchPosts();
      setContent("");
      closeModal();
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModalTitle"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content editPostModal">
          <div className="modal-header editModalHeader">
            <h5 className="modal-title" id="editModalHeaderText">
              Edit Your Hweet
            </h5>
          </div>
          <div className="modal-body editModalBody">
            <form onSubmit={editPost}>
              <div className="form-group">
                <label for="caption" id="labelitem">
                  New Caption
                </label>
                <textarea
                  type="textarea"
                  className="form-control"
                  value={content}
                  placeholder={content}
                  onChange={(e) => setContent(e.currentTarget.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer editModalFooter">
            <button
              type="button"
              className="btn btn-secondary cancelEditButton"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary saveChangesEditButton" onClick={editPost}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
