import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../componets/firebase/firebasehooks/useLogin.js";
import Logo from "../componets/HavenStandardComponents/Logo.jsx";
import TextInput from "../componets/inputs/TextInput.jsx";
import InputLinked from "../componets/buttons/InputLinked.jsx";
import "../componets/sass/_inputForms.scss";
import "../componets/sass/LoginSignUpPages/_loginPage.scss";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const { login, error, errorText, setError } = useLogin();

  const HandleSubmit = async (e) => {
    login(email, password);
    e.preventDefault();
  };

  return (
    <section className="LoginSignupSection">
      <Logo backButtonShow={true} Linked={"/"} />
      <section className="havenLoginWrapper">
        <section className="havenLogin">
          <div className="wrapper10">
            <div className="content">
              <div className="upperContent">
                <h2>Welcome Back</h2>
                <p>Log in to continue.</p>
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
                  <TextInput
                    setError={setError}
                    requiredInput={true}
                    placeholderInput={"password..."}
                    valueText={"Password"}
                    InputType={"password"}
                    setInputValue={setPassword}
                    inputValue={password}
                    InputRef={passwordRef}
                    ShowHideText={true}
                  />

                  <button>Login</button>
                </form>
              </div>
              <div className="bottomContent">
                <p>
                  Need an account? Sign up{" "}
                  <Link to={"/signup"}>
                    <b>here.</b>
                  </Link>
                </p>
                <InputLinked
                  ButtonText={"Forgot Password?"}
                  ButtonClass={"backButton"}
                  ButtonClassContainer={"backButtonContainer"}
                  Linked={"/forgotpassword"}
                  Show={"hidden"}
                />
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

export default LoginPage;
