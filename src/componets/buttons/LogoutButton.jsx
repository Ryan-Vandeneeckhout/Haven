import { useLogout } from "../firebase/firebasehooks/useLogout.js";

const LogoutButton = (props) => {
  const { logout } = useLogout();

  const LogoutAccount = () => {
    logout();
    props.UserAuth();
  };

  return (
    <button onClick={LogoutAccount} className={`${props.LogoutButtonClass}`}>
      Logout Account
    </button>
  );
};

export default LogoutButton;
