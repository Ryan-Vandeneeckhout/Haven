import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "../src/componets/firebase/context/AuthContext.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faAngleUp,
  faPlay,
  faHandshakeAlt,
  faMobileAlt,
  faUniversalAccess,
  faExclamationCircle,	
  faPause,
  faAngleDown,
  faMusic,
  faEye,
  faStar,
  faAngleRight,
  faAngleLeft,
  faArrowRight,
  faDownload,
  faBuildingColumns,
  faArrowRightFromBracket,
  faDatabase,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

library.add(

  faBars,
  faAngleUp,
  faArrowRight,
  faHandshakeAlt,
  faExclamationCircle,
  faMobileAlt,
  faUniversalAccess,
  faPause,
  faPlay,
  faTimes,
  faDownload,
  faEye,
  faAngleDown,
  faMusic,
  faBuildingColumns,
  faArrowRightFromBracket,
  faAngleRight,
  faAngleLeft,
  faDatabase,
  faStar,
  faBug
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
