import { useState, useRef } from "react";
import OnBoardingSectionWrapper from "../onboardingWrappers/OnBoardingSectionWrapper.jsx";

const OnBoardingCommunityRules = (props) => {
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const errorTextClick = "Please submit the required fields first!";

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };

  const checkboxRef = useRef(null);

  const handleInputCheckSelect = () => {
    setSuccess(!success);
  };

  return (
    <OnBoardingSectionWrapper
      errorPleaseFill={errorPleaseFill}
      errorTextClick={errorTextClick}
      errorTextFill={errorTextFill}
      errorText={errorText}
      setErrorText={setErrorText}
      widthGreen={"87.5%"}
      widthGrey={"12.5%"}
      h2TitleOnboarding={"Haven Community Rules"}
      paragraphContent={``}
      setOnBoardingProgressItem={props.setOnBoardingProgressItem}
      progressItemNext={"createuser"}
      progressItemBack={"communityrules"}
      success={success}
      stepCreation={"community rules"}
    >
      <form>
        <h3>
        Be respectful, be genuine. Respect member’s privacy. Report
        catfishing. No transphobia, no racism, no fatphobia, no ableism,
        no religious discrimination. No hate speech or bullying of any
        kind. We reserve the rights to delete any profiles that violate
        the community rules.
        </h3>
        <div className="acceptCondtions">
          <input
            type="checkbox"
            className="checkbox"
            id="conditions"
            name="conditions"
            ref={checkboxRef}
            onChange={handleInputCheckSelect}
          />
          <label htmlFor="conditions">ACCEPT</label>
        </div>
      </form>
    </OnBoardingSectionWrapper>
  );
};
export default OnBoardingCommunityRules;
