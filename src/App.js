import { useRef } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  // const handleRef = useRef(null);
  // // const handleRefChange = () => {
  // //   if (handleRef.current) {
  // //     handleRef.current.style.display = "none";
  // //   }
  // // };
  return (
    <div className="App">
      <div className="login-page">
        <form action="">
          <Input type="text" place="Email address or phone number" required />
          <Input type="password" place="Password" required />
          <Button content="Log in" style="login" />

          <a href="#" className="forgot-password">
            Forgotten Password?
          </a>
          <hr />
          <Button content="Create new account" style="CreateAccount" />
        </form>
      </div>
    </div>
  );
}

export default App;
