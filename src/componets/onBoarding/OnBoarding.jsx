import { useState } from "react";
import "../sass/OnBoarding/_onboarding.scss";
import OnBoarding12Questions from "./onboardingComponents/OnBoarding12Questions";
import OnBoardingAvatars from "./onboardingComponents/OnBoardingAvatars";
import OnBoardingBirthday from "./onboardingComponents/OnBoardingBirthday";
import OnBoardingCommunityRules from "./onboardingComponents/OnBoardingCommunityRules";
import OnBoardingFLU from "./onboardingComponents/OnBoardingFLU";
import OnBoardingInterests from "./onboardingComponents/OnBoardingInterests";
import OnBoardingLocation from "./onboardingComponents/OnBoardingLocation";
import OnBoardingPronouns from "./onboardingComponents/OnBoardingPronouns";
import OnBoardingCreateUser from "./onboardingComponents/OnBoardingCreateUser.jsx";

const OnBoarding = (props) => {
  const [OnBoardingProgressItem, setOnBoardingProgressItem] = useState("flu");

  const OnBoardingProgress = () => {
    switch (OnBoardingProgressItem) {
      case "flu":
        return (
          <OnBoardingFLU user={props.user}
            setOnBoardingProgressItem={setOnBoardingProgressItem}
          />
        );
      case "birthday":
        return (
          <OnBoardingBirthday
            setOnBoardingProgressItem={setOnBoardingProgressItem}
          />
        );
      case "pronouns":
        return (
          <OnBoardingPronouns
            setOnBoardingProgressItem={setOnBoardingProgressItem}
          />
        );
      case "interests":
        return (
          <OnBoardingInterests
            setOnBoardingProgressItem={setOnBoardingProgressItem}
          />
        );
      case "12Questions":
        return (
          <OnBoarding12Questions
            setOnBoardingProgressItem={setOnBoardingProgressItem}
          />
        );
      case "avatars":
        return (
          <OnBoardingAvatars
            setOnBoardingProgressItem={setOnBoardingProgressItem}
          />
        );
      case "communityrules":
        return (
          <OnBoardingCommunityRules
            setOnBoardingProgressItem={setOnBoardingProgressItem}
          />
        );
      case "location":
        return (
          <OnBoardingLocation
            setOnBoardingProgressItem={setOnBoardingProgressItem}
          />
        );
        case "createuser":
          return (
            <OnBoardingCreateUser UserAuth={props.UserAuth}
              setOnBoardingProgressItem={setOnBoardingProgressItem}
            />
          );
      default:
        return <p>Default</p>;
    }
  };
  return <>{OnBoardingProgress()}</>;
};

export default OnBoarding;
