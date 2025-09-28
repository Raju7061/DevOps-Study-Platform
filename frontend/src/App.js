import { useState } from "react";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    return (
      <div>
        <SignupPage />
        <LoginPage setToken={setToken} />
      </div>
    );
  }

  return <HomePage />;
}

export default App;
