import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import "../sass/_profileCard.scss";

const ProfileCardLandingPage = (props) => {
  const renderAvatar = () => {
    return <img src={props.avatar} alt="User Avatar" />;
  };
  const renderPronouns = () => {

    if (props.pronouns === undefined) {
      return <p>Pronouns none</p>
    }

    else {
      return (
        <p>
          {props.pronouns.map((item, index) => {
            return (
              <span className="pronounItem" key={index}> 
                {item.pronoun} /
              </span>
            );
          })}
        </p>
      );
    }
  };

  const renderMoment = () => {
    if (props.moments === undefined) {
      return <p>No Moments Found</p>
    }
    else {
    
      return (
        <>
          {props.moments.map((item, index) => {
            return (
              <div className="momentItem" key={index}>
                <h4 className="pronounItem" >
                  {item.question}
                </h4>
                <p>{item.answer}</p>
              </div>
            );
          })}
        </>
      );
    }
  };

  const renderInterestTags = () => {

    if (props.interests === undefined) {
      return <p>interests none</p>
    }
    else {
      return (
        <>
          {props.interests.map((item, index) => {
            return (
              <p className="interestTag" key={index}>
                {item}
              </p>
            );
          })}
        </>
      );

    }
   
  };

  const renderLocation = () => {
    if (props.location === undefined) {
      return <p>location none</p>
    }
    else {

      return (
        <>
          <p className="interestTag">{props.location.label}</p>
        </>
      );

    }
   
  };
  return (
    <Link to={`${props.uid}`}>
      <div className="profileCard">
        <div className="profileCardUpper">
          <div className="avatarContainer">{renderAvatar()}</div>
          <div className="userData">
            <h3>{props.username}</h3>

            <div className="userdataPronounsLocation">
              {renderPronouns()}
              {renderLocation()}
            </div>
          </div>
        </div>
        <div className="profileCardMiddle">
          <div className="momentRecent">{renderMoment()}</div>
          <div className="interestTags">{renderInterestTags()}</div>
        </div>
        <div className="profileCardBottom">
          <p>{DateTime.fromISO(props.created_at).toRelative()}</p>
          <p>Message</p>
        </div>
      </div>
    </Link>
  );
};
export default ProfileCardLandingPage;
