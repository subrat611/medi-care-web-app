import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import LoginPage from "./pages/LoginPage";

function App() {
  const [showLoadingScreen, setLoadingScreen] = useState(true);
  const [user, setUser] = useState(false); // user login state

  useEffect(() => {
    if (showLoadingScreen) {
      setTimeout(() => setLoadingScreen(false), 1500);
    }
  }, []);

  return (
    <div>
      {showLoadingScreen && <LoadingScreen />}
      {user == false && showLoadingScreen == false && <LoginPage />}
      {user && showLoadingScreen && <p>Home</p>}
    </div>
  );
}

export default App;
