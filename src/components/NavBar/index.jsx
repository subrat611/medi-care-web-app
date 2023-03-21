import { useEffect, useState } from "react";
import "./navbar.scss";

export default function NavBar() {
  const [currentGreet, setCurrentGreet] = useState("Welcome User");

  useEffect(() => {
    const currentTime = getCurrentTime();
    if (currentTime >= 1 && currentTime <= 5) setCurrentGreet("Welcome User");
    if (currentTime > 5 && currentTime < 12) setCurrentGreet("Good Morning");
    if (currentTime >= 12 && currentTime < 17)
      setCurrentGreet("Good Afternoon");
    if (currentTime >= 17 && currentTime < 9) setCurrentGreet("Good Evening");
    if (currentTime >= 9) setCurrentGreet("Welcome User");
  }, []);

  function getCurrentTime() {
    return new Date().getHours();
  }

  return (
    <nav className="navbar-wrapper">
      <h2>{currentGreet}</h2>
      <button className="signout-btn">Log out</button>
    </nav>
  );
}
