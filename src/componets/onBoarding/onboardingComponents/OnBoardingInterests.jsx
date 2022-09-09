import { useState } from "react";
import useStateRef from "react-usestateref";
import { db } from "../../firebase/database/config.js";
import { updateDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/firebasehooks/useAuthContext.js";
import { OnBoardingInterestsMap } from "../onboardingComponents/OnBoardingMaps/OnBoardingInterestsMap";
import OnBoardingSectionWrapper from "../onboardingWrappers/OnBoardingSectionWrapper";
import TaglistIndivdualButton from "./OnBoardingInputs/TaglistIndividualButton.jsx";

const OnBoardingInterests = (props) => {
  const [, setTagValue, tagValueRef] = useStateRef(null);
  const [tagsarray, setTagsArray, tagsArrayRef] = useStateRef([]);
  const { user } = useAuthContext();

  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const [success, setSuccess] = useState(false);
  const errorTextClick = "Please select at least one interest to display on your profile first!";

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };
    
  const tagArray = () => {
    if (!tagsarray.includes(tagValueRef.current)) {
      setTagsArray(() => [...tagsarray, tagValueRef.current]);
      writeUserData();
    } else {
      setTagsArray(tagsarray.filter((item) => item !== tagValueRef.current));
      writeUserData();
    }
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      interests: tagsArrayRef.current,
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
      widthGreen={"50%"}
      widthGrey={"50%"}
      h2TitleOnboarding={"Select your interests!"}
      paragraphContent={
        "Select at least one interest to let other users know what you are into."
      }
      setOnBoardingProgressItem={props.setOnBoardingProgressItem}
      progressItemNext={"12Questions"}
      progressItemBack={"birthday"}
      success={success}
      stepCreation={"profile creation"}
    >
      <div className="interestsContainer">
        <ul>
          {OnBoardingInterestsMap.map((item, index) => {
            return (
              <TaglistIndivdualButton
                key={index}
                ButtonClass={"interestButtons"}
                InterestName={item.InterestName}
                tagArray={tagArray}
                setTagValue={setTagValue}
                InterestBorderColour={item.InterestBorderColour}
              />
            );
          })}
        </ul>
        <p>Tip: you can always edit your interests later</p>
      </div>
    </OnBoardingSectionWrapper>
  );
};
export default OnBoardingInterests;
