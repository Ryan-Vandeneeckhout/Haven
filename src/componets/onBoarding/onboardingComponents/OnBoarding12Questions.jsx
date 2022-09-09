import { useState } from "react";
import useStateRef from "react-usestateref";
import { db } from "../../firebase/database/config.js";
import { updateDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/firebasehooks/useAuthContext.js";
import { JingQuestionList } from "../onboardingComponents/OnBoardingMaps/JingQuestionList.jsx";
import OnBoardingSectionWrapper from "../onboardingWrappers/OnBoardingSectionWrapper.jsx";
import OnBoarding12QuestionsInput from "../onboardingComponents/OnBoardingInputs/OnBoarding12QuestionsInput.jsx";

const OnBoarding12Questions = (props) => {
  const [userInputMessage, setUserInputMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [tagsarray, setTagsArray, tagsArrayRef] = useStateRef([]);
  const [, setTagValue, tagValueRef] = useStateRef(null);
  const date = new Date().toJSON();
  const { user } = useAuthContext();
  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const [success, setSuccess] = useState(false);
  const errorTextClick = "Please submit the required fields first!";

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };

  const pushData = () => {
    setTagValue({ question: question, answer: userInputMessage });
    setTagsArray(() => [...tagsarray, tagValueRef.current]);
    writeUserData();
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      moments: tagsArrayRef.current,
      timeMomentCreated: date,
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
      widthGreen={"62.5%"}
      widthGrey={"37.5%"}
      h2TitleOnboarding={"Write a moment for your profile"}
      paragraphContent={
        "Take a moment to share a thought or two, this helps other likeminded people to connect with you, you can always edit them later."
      }
      setOnBoardingProgressItem={props.setOnBoardingProgressItem}
      progressItemNext={"avatars"}
      progressItemBack={"interests"}
      success={success}
      stepCreation={"profile creation"}
    >
      <div className="questionsContainer">
        <ul className="questionList">
          {JingQuestionList.slice(0, 3).map((item, index) => {
            return (
              <OnBoarding12QuestionsInput
                setUserInputMessage={setUserInputMessage}
                userInputMessage={userInputMessage}
                setQuestion={setQuestion}
                pushData={pushData}
                key={index}
                question={item.Question}
                contentID={item.ContentID}
                QuestionPicture={item.QuestionPicture}
                setSuccess={setSuccess}
              />
            );
          })}
        </ul>
      </div>
    </OnBoardingSectionWrapper>
  );
};
export default OnBoarding12Questions;
