import { useRef, useState } from "react";
import { db } from "../../firebase/database/config.js";
import { updateDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/firebasehooks/useAuthContext.js";
import OnBoardingSectionWrapper from "../onboardingWrappers/OnBoardingSectionWrapper";
import TextInput from "../../inputs/TextInput.jsx";

const OnBoardingBirthday = (props) => {
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [dayCal, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const [success, setSuccess] = useState(false);
  const errorTextClick = "Please submit the required fields first!";

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };

  const { user } = useAuthContext();

  const HandleSubmit = (e) => {
    e.preventDefault();
    writeUserData();
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      birthday: { dayCal, month, year },
    });
      setSuccess(true);
  };

  return (
    <OnBoardingSectionWrapper
      errorPleaseFill={errorPleaseFill}
      errorTextClick={errorTextClick}
      errorTextFill={errorTextFill}
      errorText={errorText}
      setErrorText={setErrorText}
      widthGreen={"50%"}
      widthGrey={"50%"}
      h2TitleOnboarding={"When is your Birthday?"}
      paragraphContent={
        "TIP: Haven users must be 18 years or older to use the app."
      }
      stepCreation={"Account"}
      setOnBoardingProgressItem={props.setOnBoardingProgressItem}
      progressItemNext={"interests"}
      progressItemBack={"pronouns"}
      success={success}
    >
      <form className="birthdayForm" onSubmit={HandleSubmit}>
        <div className="birthdayFormInputContainer">
          <TextInput
            requiredInput={true}
            placeholderInput={"Day"}
            valueText={"Day"}
            InputType={"number"}
            setInputValue={setDay}
            inputValue={dayCal}
            InputRef={dayRef}
            ShowHideText={false}
            min={"1"}
            max={"31"}
          />
          <TextInput
            requiredInput={true}
            placeholderInput={"mm"}
            valueText={"Month"}
            InputType={"number"}
            setInputValue={setMonth}
            inputValue={month}
            InputRef={monthRef}
            ShowHideText={false}
            min={"1"}
            max={"12"}
          />
          <TextInput
            min={"1900"}
            max={"2020"}
            requiredInput={true}
            placeholderInput={"yy..."}
            valueText={"Year"}
            InputType={"number"}
            setInputValue={setYear}
            inputValue={year}
            InputRef={yearRef}
            ShowHideText={false}
          />
        </div>

        <button className="submitButton" type="submit">Submit</button>
      </form>
    </OnBoardingSectionWrapper>
  );
};
export default OnBoardingBirthday;
