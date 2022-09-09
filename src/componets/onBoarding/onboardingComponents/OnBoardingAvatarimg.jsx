import { useRef } from "react";
import useStateRef from "react-usestateref";
import { db } from "../../firebase/database/config.js";
import { updateDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/firebasehooks/useAuthContext.js";

const OnBoardingAvatarimg = (props) => {
  const [, setAvatar, AvatarRef] = useStateRef("");
  const avatarRef = useRef();
  const { user } = useAuthContext();

  localStorage.setItem("avatar", "./assets/profileAvatars/profileDefault.png");

  const addClass = (e) => {
    let avatarselected = document.getElementsByClassName("selectedAvatar");
    for (let i = 0; i < avatarselected.length; i++)
      avatarselected[i].classList.remove("selectedAvatar");
    setAvatar(e.target.getAttribute("src"));
    avatarRef.current.classList.add("selectedAvatar");
    writeUserData();
  };
  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      avatar: AvatarRef.current,
    });
    props.setSuccess(true);
  };

  return (
    <div className="imgAvatar" ref={avatarRef} onClick={addClass}>
      <img src={props.AvatarImg} alt="Avatar Pictures" />
    </div>
  );
};
export default OnBoardingAvatarimg;
