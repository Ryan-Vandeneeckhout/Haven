import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../componets/firebase/firebasehooks/useSignup";
import Logo from "../componets/HavenStandardComponents/Logo.jsx";
import TextInput from "../componets/inputs/TextInput.jsx";
import InputLinked from "../componets/buttons/InputLinked.jsx";
import "../componets/sass/_inputForms.scss";
import "../componets/sass/LoginSignUpPages/_loginPage.scss";

const SignUpPage = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorPasswordText, setErrorPasswordText] = useState("");
  const [passWordError, setPassWordError] = useState(false);

  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signup, error, errorText, setError } = useSignup();

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const special = /[!@#$%&]/g;

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      passwordRef.current.classList.add("errorForm");
      confirmPasswordRef.current.classList.add("errorForm");
      setPassWordError(true);
      setErrorPasswordText("Passwords do not match. Please try again.");
    }

    if (password === "") {
      setErrorPasswordText("Password cannot be blank.");
      passwordRef.current.classList.add("errorForm");
    }

    if (!passwordRef.current.value.match(special)) {
      passwordRef.current.classList.add("errorForm");
      setPassWordError(true);
      setErrorPasswordText(
        "Password needs to include a special character symbol (!@#$%&). Please try again."
      );
    }

    if (
      passwordRef.current.value.match(
        lowerCaseLetters && upperCaseLetters && numbers
      ) &&
      password === confirmPassword &&
      password.includes("@") &&
      password.length > 4
    ) {
      passwordRef.current.classList.remove("errorForm");
      confirmPasswordRef.current.classList.remove("errorForm");
      passwordRef.current.classList.remove("errorForm");
      confirmPasswordRef.current.classList.remove("errorForm");
      passwordRef.current.classList.add("successForm");
      confirmPasswordRef.current.classList.add("successForm");
      setPassWordError(false);
      signup(email, password);
    
    }
    
  };

  return (
    <section className="LoginSignupSection">
      <Logo backButtonShow={true} Linked={"/"} />
      <section className="havenLoginWrapper">
        <section className="havenLogin">
          <div className="wrapper10">
            <div className="content">
              <div className="upperContent">
                <h2>Welcome</h2>
                <p>Create an account to continue</p>
                {error ? <p>{errorText}</p> : null}
                {passWordError ? <p>{errorPasswordText}</p> : null}
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

                  <TextInput
                    setError={setError}
                    requiredInput={true}
                    placeholderInput={"Confirm password..."}
                    valueText={"Confirm Password"}
                    InputType={"password"}
                    setInputValue={setConfirmPassword}
                    inputValue={confirmPassword}
                    InputRef={confirmPasswordRef}
                    ShowHideText={true}
                  />

                  <button>Sign up</button>
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

export default SignUpPage;
