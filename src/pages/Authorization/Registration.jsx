import { NavLink } from "react-router-dom/dist";
import goBack from "../../assets/leftarrow.png";
import "../../components/authoForms/autho.css";
import UserSignUp from "../../components/authoForms/UserSignUp";

const Registration = () => {
  return (
    <div className="layout-header">
      <NavLink className="goBackBtn" to={"/login"}>
        <img src={goBack} alt="leftArrow" /> Log In
      </NavLink>
      <UserSignUp />
    </div>
  );
};

export default Registration;
