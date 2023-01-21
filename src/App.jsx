import { useEffect, useState } from "react";
import { app } from "./config/firebase";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import Login from "./components/Login/Login";
import NavBar from "./components/NavBar";

import styles from "./app.module.scss";

function App() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [phnNo, setPhnNo] = useState("+917735336045");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth(app);

  const showLoginComp = (isOpen) => setToggleLogin(isOpen);

  useEffect(() => {
    if (localStorage.getItem("FirebaseAccessToken")) setIsLogin(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className="container-xxl">
        <NavBar
          showLoginComp={showLoginComp}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          auth={auth}
        />
        {toggleLogin ? (
          <Login showLoginComp={showLoginComp} auth={auth} setIsLogin={setIsLogin} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
