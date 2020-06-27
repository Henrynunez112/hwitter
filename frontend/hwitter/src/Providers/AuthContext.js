import React, { createContext, useState, useEffect } from "react";
import firebase from "../Util/firebase";
import { getFirebaseIdToken } from "../Util/firebaseFunction";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  const updateUser = (user) => {
    if (user) {
      const { email, uid } = user;
      const lastLogin = user.metadata.lastLogin;
      setCurrentUser({ email, lastLogin, id: uid });
      getFirebaseIdToken().then((token) => {
        setToken(token);
        setLoading(false);
      });
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
    return unsubscribe;
  }, []);

  if (loading) return <div>Loading...</div>;

  return <AuthContext.Provider value={{currentUser, token}}>
      {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
