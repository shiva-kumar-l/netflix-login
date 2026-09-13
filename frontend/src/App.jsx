import { useState } from "react";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <div className="dashboard">
        <h1>Welcome to Netflix</h1>
        <p>You have successfully logged in.</p>

        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }

  return <Login onLoginSuccess={handleLoginSuccess} />;
}

export default App;