import React from "react";
import axios from "axios";
import { apiURL } from "../Util/apiUrl";
import "../Css/DeletePost.css";

const DeletePost = ({ post, deletePost, closeModal }) => {
  const API = apiURL();

  const deleteHweet = async () => {
    try {
      await axios.delete(`${API}/hweets/${post.id}`);
      deletePost(post.id);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content deletePostModal">
          <div className="modal-header deletePostModalHeader">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Delete Post?
            </h5>
          </div>
          <div className="modal-body deletePostModalBody">Are You sure?</div>
          <div className="modal-footer deletePostModalFooter">
            <button
              type="button"
              className="btn btn-secondary cancelDelete"
              onClick={closeModal}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary confirmDelete"
              onClick={deleteHweet}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeletePost;
