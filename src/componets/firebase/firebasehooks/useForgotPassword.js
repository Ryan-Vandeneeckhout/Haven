import { useState } from "react";
import { auth } from "../database/config.js";
import { sendPasswordResetEmail } from "firebase/auth";

export const useForgotPassword = () => {
  //Login Page Logic Firebase Auth
  const [error, setError] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [success, setSuccess] = useState(null);

  const forgotPassword = (email) => {
    setError(null);
    setSuccess(null);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccess(true);
        console.log(success);
      })
      .catch((err) => {
        setError(true);
        setErrorText(err.message);
        console.log(errorText);

      });
  };

  return { error, forgotPassword, success, errorText, setError };
};
