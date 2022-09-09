import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../database/config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext.js";

export const useSignup = () => {
  //Sign up Page Logic Firebase
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(""); 
  const [success, setSuccess] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = (email, password) => {
    setError(null);
    setSuccess(null); 
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
        setSuccess((value) => !value);
        setError(false);
        navigate("/onboarding");
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
        setErrorText(err.message); 

        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorText("Email already in use!");
          }
          
      });
  };

  return { error, signup, success, errorText };
};
