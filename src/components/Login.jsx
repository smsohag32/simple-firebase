import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
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

  const handleGithubSingIn = () => {
    console.log("hello");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        setUser(logInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <>
          <button onClick={handleSingOut}>Sing Out</button>
        </>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGithubSingIn}>Github Login</button>
        </>
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
