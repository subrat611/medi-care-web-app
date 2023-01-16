import NavBar from "./components/NavBar";

import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className="container-xxl">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
