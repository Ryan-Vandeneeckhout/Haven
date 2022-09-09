import "../sass/_inputForms.scss";

export default function TextInput(props) {
  const handleUserInput = (e) => {
    props.setInputValue(`${e.target.value}`);
  };

  const handleFocus = (e) => {
    e.target.select();
    let input = document.getElementsByClassName("inputTextFocusedByUser");
    for (let i = 0; i < input.length; i++)
      input[i].classList.remove("inputTextFocusedByUser");
    props.InputRef.current.classList.add("inputTextFocusedByUser");
  };

  const showHideTextInput = () => {
    const inputUserWishesToShow = props.InputRef.current;
    if (inputUserWishesToShow.type === "password") {
      inputUserWishesToShow.type = "text";
    } else {
      inputUserWishesToShow.type = "password";
    }
  };
  return (
    <div className="textInputHaven">
      <label className="textInputLabel" htmlFor={`${props.valueText}`}>
        {props.valueText}:
      </label>

      <div className="inputContainer">
        {props.requiredInput ? (
          <input
            required
            aria-label={`${props.InputText} input`}
            type={`${props.InputType}`}
            onChange={handleUserInput}
            placeholder={props.placeholderInput}
            value={props.inputValue}
            onFocus={handleFocus}
            ref={props.InputRef}
            min={props.min}
            max={props.max}
          />
        ) : (
          <input
            aria-label={`${props.valueText} input`}
            type={`${props.valueType}`}
            onChange={handleUserInput}
            placeholder={props.placeholderInput}
            value={props.inputValue}
            onFocus={handleFocus}
            ref={props.InputRef}
            min={props.min}
            max={props.max}
          />
        )}
        {props.ShowHideText ? (
          <div onClick={showHideTextInput} className="inputShowHideText">
            Show
          </div>
        ) : null}
      </div>
    </div>
  );
}
