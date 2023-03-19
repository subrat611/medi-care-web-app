import { useEffect, useState, useContext } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { UserContext } from "./context/User";
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
      {currentUser !== null && showLoadingScreen === false && <p>Home</p>}
    </>
  );
}

export default App;
