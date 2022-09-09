import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputLinked = (props) => {
  return (
    <div className={`buttonContainer ${props.ButtonClassContainer}`}>
      <Link className={props.ButtonClass} to={`${props.Linked}`}>
        <span className="textButton">{props.ButtonText}</span>
        <span className={`imageButton ${props.Show}`}>
          <FontAwesomeIcon className="iconArrow" icon="fa-solid fa-angle-right" />
        </span>
      </Link>
    </div>
  );
};
export default InputLinked;
