import { useState } from "react";

import styles from "./app.module.scss";

import Login from "./components/Login/Login";
import NavBar from "./components/NavBar";

function App() {
  const [toggleLogin, setToggleLogin] = useState(false);

  const showLoginComp = (isOpen) => setToggleLogin(isOpen);

  return (
    <div className={styles.wrapper}>
      <div className="container-xxl">
        <NavBar showLoginComp={showLoginComp} />
        {toggleLogin ? <Login showLoginComp={showLoginComp} /> : null}
      </div>
    </div>
  );
}

export default App;
