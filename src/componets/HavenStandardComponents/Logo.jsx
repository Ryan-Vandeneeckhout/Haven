import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sass/_havenLogo.scss";
import LogoutButton from "../buttons/LogoutButton";

const Logo = (props) => {
  return (
    <div className="upperLogo">
      <h2 className="Logo">haven</h2>
      {props.user ? <LogoutButton/> : null}
      {props.backButtonShow ? (
        <Link className={props.ButtonClass} to={`${props.Linked}`}>
          <span className={`imageButton ${props.Show}`}>
            <FontAwesomeIcon
              className="iconArrow"
              icon="fa-solid fa-angle-left"
            />
          </span>
          <span className="textButton">Home</span>
        </Link>
      ) : null}
    </div>
  );
};
export default Logo;
