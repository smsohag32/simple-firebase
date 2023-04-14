import React from "react";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {};
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Login</button>
    </div>
  );
};

export default Login;
