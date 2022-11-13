import Loginform from "./loginForm";
import { useAuth } from "../../context/authcontext";

function Loginpage() {
    const { state } = useAuth();
  
    return (
      <div>
        {state.login ? (
          <div>You are logged in</div>
        ) : (
          <div>Log in to continue</div>
        )}
        <br />
        <Loginform />
        {state.userCredVerification ? (
          <p>You have logged in successfully</p>
        ) : (
          <p>Invalid or empty credentials</p>
        )}
      </div>
    );
  }
  export default Loginpage;