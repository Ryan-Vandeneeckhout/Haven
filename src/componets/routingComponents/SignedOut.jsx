import { Routes, Route } from "react-router-dom";
import ForgotPassword from "../../HavenLoginSignupPages/ForgotPassword";
import LoginPage from "../../HavenLoginSignupPages/LoginPage";
import SignUpPage from "../../HavenLoginSignupPages/SignUpPage";
import SignedOutLandingPage from "../landingPages/SignedOutLandingPage";

const SignedOut = (props) => {
  return (
    <main>
      <Routes>
        <Route extact path="/" element={<SignedOutLandingPage />} />
        <Route extact path="/signup" element={<SignUpPage/>} />
        <Route extact path="/login" element={<LoginPage UserAuth={props.UserAuth}/>} />
        <Route extact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </main>
  );
};

export default SignedOut;
