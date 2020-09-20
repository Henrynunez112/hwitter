import React from "react";
import axios from "axios";
import { apiURL } from "../Util/apiUrl";

const DeletePost = ({ post }) => {
  const API = apiURL();

  const deleteHweet = async () => {
    await axios.delete(`${API}/hweets/${post.id}`);
    window.location.reload();
  };
  
  return (
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Are You sure</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              No
            </button>
            <button type="button" class="btn btn-primary" onClick={deleteHweet}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeletePost;
