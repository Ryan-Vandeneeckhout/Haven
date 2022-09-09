import "./_progressBar.scss";

const ProgressBarWidth = (props) => {
  return (
    <div className="progressBarContainer">
      <div className="Bar">
        <div
          className="greenBar"
          style={{ color: "green", width: props.widthGreen }}
        />
        <div
          className="greyBar"
          style={{ color: "grey", width: props.widthGrey }}
        />
      </div>
          <p>{props.stepCreation}</p>
    </div>
  );
};
export default ProgressBarWidth;
