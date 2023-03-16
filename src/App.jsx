import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [showLoadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    if (showLoadingScreen) {
      setTimeout(() => setLoadingScreen(false), 1500);
    }
  }, []);

  return <div>{showLoadingScreen && <LoadingScreen />}</div>;
}

export default App;
