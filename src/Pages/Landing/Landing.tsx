import LoginContainer from "../../Containers/LoginContainer/LoginContainer";
import TitleContainer from "../../Containers/TitleContainer/TitleContainer";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <LoginContainer />
      <TitleContainer />
    </div>
  );
};

export default Landing;
