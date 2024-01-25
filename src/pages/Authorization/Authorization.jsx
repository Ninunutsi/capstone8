import { NavLink } from "react-router-dom/dist";
import goBack from "../../assets/leftarrow.png";
import "../../components/authoForms/autho.css";
import UserLogIn from "../../components/authoForms/UserLogIn";

const Authorization = () => {
  return (
    <div className="layout-header">
      <NavLink className="goBackBtn" to={"/"}>
        <img src={goBack} alt="leftArrow" />
        go back
      </NavLink>
      <UserLogIn />
    </div>
  );
};

export default Authorization;
