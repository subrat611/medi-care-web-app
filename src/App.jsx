import { useEffect, useState, useContext } from "react";
import { UserContext } from "./context/User";

import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [showLoadingScreen, setLoadingScreen] = useState(true);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (showLoadingScreen) {
      setTimeout(() => setLoadingScreen(false), 1500);
    }
  }, []);

  return (
    <>
      {showLoadingScreen && <LoadingScreen />}
      {currentUser === null && showLoadingScreen === false && <LoginPage />}
      {currentUser !== null && showLoadingScreen === false && <HomePage />}
    </>
  );
}

export default App;
