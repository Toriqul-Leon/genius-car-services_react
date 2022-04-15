import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <small className="text-danger">{error ? error?.message : ""}</small>
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="p-1 m-1">or</p>

        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-75 p-2 fs-5"
        >
          {" "}
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png"
            alt=""
            width={"25px"}
            height={"30px"}
          />{" "}
          Google Sign In
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center my-2">
        <button className="btn btn-info w-75 p-2 fs-5">
          {" "}
          <img
            src="https://files.oyebesmartest.com/uploads/preview/rounded-facebook-logo-icon-png-hddbzdrabkgu.png"
            alt=""
            width={"40px"}
            height={"30px"}
          />{" "}
          Facebook Sign In
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center my-2">
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-75 p-2 fs-5"
        >
          {" "}
          <img
            src="https://jagveerloky.com/wp-content/uploads/2021/07/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png"
            alt=""
            width={"40px"}
            height={"30px"}
          />{" "}
          Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
