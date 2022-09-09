import "./componets/sass/_app.scss";
import "./componets/sass/StyleGuide.scss";
import "./componets/sass/_variables.scss"; 

import SignedIn from "./componets/routingComponents/SignedIn.jsx";
import SignedOut from "./componets/routingComponents/SignedOut.jsx";

import { useAuthContext } from "./componets/firebase/firebasehooks/useAuthContext";
import { BrowserRouter } from "react-router-dom";

function App() {

  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
          {authIsReady && (
            <>
            {user && <SignedIn user={user} />}
            {!user && <SignedOut user={user} />}
              </>
          )}
      </BrowserRouter>
    </div>
  );
}

export default App;
