import { useRef, useState } from "react";
import { db } from "../../firebase/database/config.js";
import { doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/firebasehooks/useAuthContext.js";
import OnBoardingSectionWrapper from "../onboardingWrappers/OnBoardingSectionWrapper";
import TextInput from "../../inputs/TextInput.jsx";

const OnBoardingFLU = (props) => {
  const { user } = useAuthContext();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const [success, setSuccess] = useState(false); 
  const [username, setUserName] = useState("");
  const errorTextClick = "Please submit the required fields first!";

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };

  const writeUserData = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      uid: user.uid,
      first_name: firstName,
      last_name: lastName,
      username: username,
      onboarding: true,
    });
    setErrorText(false);
    setErrorTextFill(false);
    setSuccess(true); 
  };

  return (
    <OnBoardingSectionWrapper
      errorPleaseFill={errorPleaseFill}
      errorTextClick={errorTextClick}
      errorTextFill={errorTextFill}
      errorText={errorText}
      setErrorText={setErrorText}
      widthGreen={"12.5%"}
      widthGrey={"87.5%"}
      stepCreation={"Account"}
      h2TitleOnboarding={"What is your name?"}
      paragraphContent={
        "Haven collects user data only to display on the user's profile, Haven will never sell your data to third parties for any reason. Any data/content created by the user remains the sole property of that user."
      }
      user={user}
      setOnBoardingProgressItem={props.setOnBoardingProgressItem}
      progressItemNext={"location"}
      progressItemBack={"default"}
      success={success}
    >
      <form className="textForm" onSubmit={writeUserData}>
        <TextInput
          requiredInput={false}
          placeholderInput={"First Name (Optionial)..."}
          valueText={"First Name"}
          InputType={"text"}
          setInputValue={setFirstName}
          inputValue={firstName}
          InputRef={firstNameRef}
          ShowHideText={false}
        />

        <TextInput
          requiredInput={false}
          placeholderInput={"Last Name (Optionial)..."}
          valueText={"Last Name"}
          InputType={"text"}
          setInputValue={setLastName}
          inputValue={lastName}
          InputRef={lastNameRef}
          ShowHideText={false}
        />
        <TextInput
          requiredInput={true}
          placeholderInput={"Username (Required)..."}
          valueText={"Username"}
          InputType={"text"}
          setInputValue={setUserName}
          inputValue={username}
          InputRef={usernameRef}
          ShowHideText={false}
        />
        <button className="submitButton" type="submit">Submit</button>
      </form>
    </OnBoardingSectionWrapper>
  );
};
export default OnBoardingFLU;
