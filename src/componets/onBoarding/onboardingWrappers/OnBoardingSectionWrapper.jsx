import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../HavenStandardComponents/Logo";
import ProgressBarWidth from "../../HavenStandardComponents/ProgressBarWidth";

const OnBoardingSectionWrapper = (props) => {
  const { children } = props;

  return (
    <div className={`onBoardingSectionWrapper ${props.wrapperFix}`}>
      <Logo backButtonShow={true} Linked={"/"} />
      <div className="wrapper10">
        <div className="contentWrapper">
        <div className="upperContent">
          <ProgressBarWidth
            stepCreation={props.stepCreation}
            widthGreen={props.widthGreen}
            widthGrey={props.widthGrey}
          />
          <h2>{props.h2TitleOnboarding}</h2>
          <p className="desktopParagraph">{props.paragraphContent}</p>
        </div>
        <div className="errorParagraphs">
          {props.errorText ? (
            <p className="errorAlert">
              <FontAwesomeIcon icon="fas fa-exclamation-circle" /> Something went wrong please reload the app!
            </p>
          ) : null}
          {props.errorTextFill ? (
            <p className="errorAlert">
              <FontAwesomeIcon icon="fas fa-exclamation-circle" /> {props.errorTextClick}
            </p>
          ) : null}
        </div>
        <div className="middleContent">{children}</div>
        <div className="bottomContent">
          <button className="backButton"
            onClick={() =>
              props.setOnBoardingProgressItem(props.progressItemBack)
            }
          >
            <FontAwesomeIcon className="iconArrow" icon="fas fa-angle-left" />{" "}
            Back
          </button>
          {props.success ? (
            <button className="nextButton greenColor2"
              onClick={() =>
                props.setOnBoardingProgressItem(props.progressItemNext)
              }
            >
              Next{" "}
              <FontAwesomeIcon
                className="iconArrow"
                icon="fas fa-angle-right"
              />
            </button>
          ) : (
            <button className="nextButton greyColor1" onClick={props.errorPleaseFill}>
              Next{" "}
              <FontAwesomeIcon
                className="iconArrow"
                icon="fas fa-angle-right"
              />
            </button>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};
export default OnBoardingSectionWrapper;
