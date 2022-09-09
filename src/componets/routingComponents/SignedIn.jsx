import { Routes, Route } from "react-router-dom";
import LandingPage from "../HavenSignedInComponents/LandingPage";
import OnBoarding from "../onBoarding/OnBoarding";

const SignedIn = () => {
    return (
        <main>
            <Routes>
                <Route extact path="/" element={<LandingPage />} />
                <Route extact path="/onboarding" element={<OnBoarding/>} />
            </Routes>
        </main>
    );
    
}

export default SignedIn; 