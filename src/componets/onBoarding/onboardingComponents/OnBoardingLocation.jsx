import { useRef, useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import useStateRef from "react-usestateref";
import { db } from "../../firebase/database/config.js";
import { updateDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/firebasehooks/useAuthContext.js";
import OnBoardingSectionWrapper from "../onboardingWrappers/OnBoardingSectionWrapper";

const OnBoardingLocation = (props) => {
  const checkboxRef = useRef(null);
  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const [success, setSuccess] = useState(false);

  const [value, setValue] = useState("");
  const [, setLocation, locationRef] = useStateRef("");
  const [sharelocation, setShareLocation, sharelocationRef] =
    useStateRef(false);

  const options = useMemo(() => countryList().getData(), []);
  const errorTextClick = "Please submit the required fields first!";
  const { user } = useAuthContext();

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };
    const HandleSubmit = async (e) => {
        e.preventDefault();
        writeUserData();
    }
    const handleInputCheckSelect = () => {
    setShareLocation(!sharelocation);
    writeUserData();
  };
  const changeHandler = (value) => {
    setValue(value);
    setLocation(value);
    writeUserData();
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      location: locationRef.current,
      onboarding: "location",
      sharelocation: sharelocationRef.current,
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
      widthGreen={"25%"}
      widthGrey={"75%"}
      h2TitleOnboarding={"Where are you located?"}
      paragraphContent={
        "Haven collects location data to help match the user with other users nearby, location data is displayed by default in the user's profile settings."
      }
      setOnBoardingProgressItem={props.setOnBoardingProgressItem}
      progressItemNext={"pronouns"}
      progressItemBack={"flu"}
      success={success}
    >
      <form className="textForm" onSubmit={HandleSubmit}>
        <Select options={options} value={value} onChange={changeHandler} />
        {value ? null : <p className="agePara">Please Select a Location</p>}
        <div className="acceptCondtions">
          <input
            type="checkbox"
            className="checkbox"
            id="conditions"
            name="conditions"
            ref={checkboxRef}
            onChange={handleInputCheckSelect}
          />
          <label htmlFor="conditions">Share my location</label>
        </div>
        <button className="submitButton" type="submit">Submit</button>
      </form>
    </OnBoardingSectionWrapper>
  );
};
export default OnBoardingLocation;
