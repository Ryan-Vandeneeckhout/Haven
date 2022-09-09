import ProfileCardLandingPage from "./ProfileCardLandingPage";
import { useCollection } from "../firebase/firebasehooks/useFirestoreDatabase.js";

export default function ProfileSettingsFirebase() {
  const { databaseFirestore } = useCollection("HavenProfileSettings");

  const renderUserSettings = () => {
    return databaseFirestore ? (
      <>
         <h2>Welcome to Haven, here are some people who joined us just like you!</h2>
        {databaseFirestore.map((post, index) => (
          <ul className="userInfomationFirebase" key={index}>
            <ProfileCardLandingPage username={post.username} interests={post.interests} pronouns={post.pronouns} dateMoment={post.timeMomentCreated} avatar={post.avatar} moments={post.moments} location={post.location} uid={post.uid} created_at={post.timeMomentCreated} />
          </ul>
        ))}
      </>
    ) : null;
  };

  return (
    <section className="userSettings">
      <div className="userSettings-wrapper">
        {renderUserSettings()}
      </div>
    </section>
  );
}
