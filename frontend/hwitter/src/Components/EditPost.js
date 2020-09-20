import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../Util/apiUrl";
import "../Css/EditPost.css"

const EditPost = ({post}) => {
  const [content, setContent] = useState("");
  const API = apiURL();
  
  const editPost = async (e) =>{
    e.preventDefault();
    await axios.patch(`${API}/hweets/${post.id}`, {
      content
    })
    window.location.reload();
  }

  return (
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content editPostModal">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"></h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form onSubmit={editPost}>
            <div className="form-group">
                <label for="caption" id="labelitem">
                  New Caption
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={content}
                  placeholder={content}
                  id='content'
                  onChange={(e) => setContent(e.currentTarget.value)}
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" onClick={editPost}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
