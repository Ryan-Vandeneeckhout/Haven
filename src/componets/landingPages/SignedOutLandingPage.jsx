import InputLinked from "../buttons/InputLinked.jsx";
import Logo from "../HavenStandardComponents/Logo.jsx";
import "../sass/StyleGuide.scss";
import "../sass/LandingPages/_landingPageSignedOut.scss"; 

const SignedOutLandingPage = () => {
  return (
    <main>
    <section className="SignedOutLandingPage">
      <Logo backButtonShow={false}/>
      <div className="wrapper15">
        <div className="content">
          <div className="upperContainer">
            <h1>Haven</h1>
            <p>
              A moments journey for members of the LGBTQ+ community to find
              friends.
            </p>
          </div>
          <div className="bottomContainer">
            <p className="mobilePara">Welcome</p>
            <div className="landingPageButtonsContainers">
              <InputLinked
                ButtonText={"Sign Up"}
                ButtonClass={"signInButton greenColor1"}
                ButtonClassContainer={"signInLandingPageButton"}
                Linked={"/signup"}
                Show={"hidden"}
              />
              <InputLinked
                ButtonText={"Log In"}
                Linked={"/login"}
                ButtonClass={"logInButton"}
                ButtonClassContainer={"logInLandingPageButton"}
                Show={"hidden"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default SignedOutLandingPage;
