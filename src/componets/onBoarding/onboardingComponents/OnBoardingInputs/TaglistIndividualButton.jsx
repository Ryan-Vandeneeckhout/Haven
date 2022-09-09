import { useRef, useState } from "react";

const TaglistIndivdualButton = (props) => {
    //Taglist if Button Clicked Function Component// 
    
    const [tagButtonSelected, setTagButtonSelected] = useState(false); 
    const tagButtonRef = useRef();
  
    
    //Taglist Button Clicked function Handler// 
    const buttonClicked = (event) => {

        // Taglist if user Wishes to Add to Search 
        if (tagButtonSelected === false) {
            tagButtonRef.current.classList.add("clickedTagButton");
            setTagButtonSelected(true);
            props.setTagValue(event.target.value);
            props.tagArray();
        }
        else {
            //Taglist if user wishes to remove from search
            tagButtonRef.current.classList.remove("clickedTagButton");
            setTagButtonSelected(false);
            props.setTagValue(event.target.value);
            props.tagArray(); 
        }
        
    }
    return (
        <button ref={tagButtonRef} onClick={buttonClicked} className={`${props.ButtonClass} ${props.InterestBorderColour}`} value={props.InterestName}>{props.InterestName}
        </button>
    )
}
export default TaglistIndivdualButton; 