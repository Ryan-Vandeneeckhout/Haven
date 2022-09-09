import { useState } from "react";
import { JingAvatarMap } from "../onboardingComponents/OnBoardingMaps/JingAvatarmap.jsx";
import OnBoardingAvatarimg from "../onboardingComponents/OnBoardingAvatarimg.jsx";
import OnBoardingSectionWrapper from "../onboardingWrappers/OnBoardingSectionWrapper.jsx";

const OnBoardingAvatars = (props) => {
  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const [success, setSuccess] = useState(false);
  const errorTextClick = "Please submit the required fields first!";

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };

  return (
    <OnBoardingSectionWrapper
      errorPleaseFill={errorPleaseFill}
      errorTextClick={errorTextClick}
      errorTextFill={errorTextFill}
      errorText={errorText}
      setErrorText={setErrorText}
      widthGreen={"75%"}
      widthGrey={"25%"}
      h2TitleOnboarding={"Please pick an animal avatar"}
      paragraphContent={"TIP: you can always change your avatar later."}
      setOnBoardingProgressItem={props.setOnBoardingProgressItem}
      progressItemNext={"communityrules"}
      progressItemBack={"12Questions"}
      success={success}
      stepCreation={"profile creation"}
    >
      <div className="Avatars">
        {JingAvatarMap.map((item, index) => {
          return (
            <OnBoardingAvatarimg
              setSuccess={setSuccess}
              key={index}
              AvatarImg={item.AvatarImg}
            />
          );
        })}
      </div>
    </OnBoardingSectionWrapper>
  );
};

export default OnBoardingAvatars;
