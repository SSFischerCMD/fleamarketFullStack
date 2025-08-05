import App from "../App";
import ExitIcon from "../svg/exit";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage(){
  return(
    <>
      <div className="popUp-container">
        <div className="popUp-content">
          <Link to={"/"}>
            <ExitIcon ></ExitIcon>
          </Link>
          <h1>Sign In</h1>
          <div>username</div>
        </div>
          <Routes>
            <Route path="/" element={<App/>}/>
          </Routes>
      </div>
    </>
  );
}

export default LoginPage