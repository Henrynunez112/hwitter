import React from "react";
import { logOut } from "../Util/firebaseFunction";

const LogOut = () => {
  return (
    <div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default LogOut;
