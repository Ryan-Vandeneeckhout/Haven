import { useRef, useState } from "react";
import useStateRef from "react-usestateref";
import { db } from "../../firebase/database/config.js";
import { updateDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/firebasehooks/useAuthContext.js";
import OnBoardingSectionWrapper from "../onboardingWrappers/OnBoardingSectionWrapper";
import TextInput from "../../inputs/TextInput.jsx";

const OnBoardingPronouns = (props) => {
  const PronounsText = "Type here for other options";
  const customRef = useRef();
  const [pronouns, setPronouns, pronounsRef] = useStateRef([]);
  const [pronounsCustom, setPronounCustom] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user } = useAuthContext();
  const errorTextClick = "Please submit the required fields first!";

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };

  const handlePronouns = (e) => {
    if (!pronouns.includes(e.target.value)) {
      setPronouns([...pronouns, { pronoun: e.target.value }]);
    } else {
      setPronouns(pronouns.filter((item) => item !== e.target.value));

      if (pronouns.length === 0 || pronouns === []) {
        setPronouns([]);
      }
    }
    writeUserData();
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      pronouns: pronounsRef.current,
      pronounsCustom: customRef.current.value,
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
      widthGreen={"37.5%"}
      widthGrey={"62.5%"}
      h2TitleOnboarding={"What are your preferred pronouns?"}
      paragraphContent={
        "Select your own pronouns."
      }
      setOnBoardingProgressItem={props.setOnBoardingProgressItem}
      progressItemNext={"birthday"}
      progressItemBack={"location"}
      success={success}
      stepCreation={"Account"}
    >
      <form className="textForm">
        <div className="checkboxContainer">
          <div className="acceptCondtions">
            <input
              type="checkbox"
              className="checkbox"
              name="conditions"
              value="SHE/HER"
              onChange={handlePronouns}
            />
            <label htmlFor="conditions">SHE/HER</label>
          </div>

          <div className="acceptCondtions">
            <input
              type="checkbox"
              className="checkbox"
              name="conditions"
              value="HE/HIM"
              onChange={handlePronouns}
            />
            <label htmlFor="conditions">HE/HIM</label>
          </div>

          <div className="acceptCondtions">
            <input
              type="checkbox"
              className="checkbox"
              name="conditions"
              value="THEY/THEM"
              onChange={handlePronouns}
            />
            <label htmlFor="conditions">THEY/THEM</label>
          </div>
          <div className="acceptCondtions">
            <input
              type="checkbox"
              className="checkbox"
              name="conditions"
              value="XE/XIM/XIRS"
              onChange={handlePronouns}
            />
            <label htmlFor="conditions">XE/XIM/XIRS</label>
          </div>
        </div>
        <TextInput
          requiredInput={true}
          placeholderInput={PronounsText}
          valueText={"Custom Pronouns"}
          InputType={"text"}
          setInputValue={setPronounCustom}
          inputValue={pronounsCustom}
          InputRef={customRef}
          ShowHideText={false}
        />
      </form>
    </OnBoardingSectionWrapper>
  );
};

export default OnBoardingPronouns;
