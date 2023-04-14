import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSingOut}>Sing Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Login</button>
      )}

      <br />
      {user && (
        <div>
          <h1>Welcome Mr {user?.displayName}</h1>
          <h1>User Email : {user?.email}</h1>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
