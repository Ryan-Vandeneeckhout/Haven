import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../componets/inputs/TextInput";
import Logo from "../componets/HavenStandardComponents/Logo.jsx";

import { useForgotPassword } from "../componets/firebase/firebasehooks/useForgotPassword.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const { forgotPassword, error, errorText, setError } = useForgotPassword();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    forgotPassword(email);
  };

  return (
    <section className="LoginSignupSection">
      <Logo backButtonShow={true} Linked={"/"} />
      <section className="havenLoginWrapper">
        <section className="havenLogin">
          <div className="wrapper10">
            <div className="content">
              <div className="upperContent">
                <h2>Forgot Password</h2>
                <p className="forgotPasswordParagraph">
                  Forgot your password? Please submit your email below and a link will
                  be provided to reset your password. Please check your spam
                  folder for emails that may have gone awry.
                </p>
                {error ? <p>{errorText}</p> : null}
              </div>

              <div className="middleContent">
                <form
                  className="textInputEmailPasswordForm"
                  onSubmit={HandleSubmit}
                >
                  <TextInput
                    setError={setError}
                    requiredInput={true}
                    placeholderInput={"email..."}
                    valueText={"Email"}
                    InputType={"email"}
                    setInputValue={setEmail}
                    inputValue={email}
                    InputRef={emailRef}
                    ShowHideText={false}
                  />
                  <button>Submit</button>
                </form>
              </div>
              <div className="bottomContent">
                <p>Already Have an Account?</p>
                <p>
                  Login in{" "}
                  <Link to={"/login"}>
                    <b>here.</b>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="alternativeLogin">
          <div className="wrapper10">
            <div>
              <h2>Haven</h2>
              <p>
                A moments journey for members of the LGBTQ+ community to find
                friends.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ForgotPassword;
