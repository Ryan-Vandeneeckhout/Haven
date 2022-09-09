import LogoutButton from "../buttons/LogoutButton";
import Logo from "../HavenStandardComponents/Logo";
import ProfileSettingsFirebase from "./ProfileSettingsFirebase";

const LandingPage = () => {

    return (
        <section className="LandingPageSignedIn">
            <Logo/>
            <div className="wrapper10">
                <ProfileSettingsFirebase/>
                <LogoutButton/>
            </div>
    </section>
)
}
export default LandingPage;