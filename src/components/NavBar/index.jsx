import React from "react";
import { signOut } from "firebase/auth";

import styles from "./navbar.module.scss";

export default function NavBar({ showLoginComp, isLogin, setIsLogin, auth }) {
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        setIsLogin(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ShreeMediCare
        </a>
        <div>
          <ul className="navbar-nav w-100 justify-content-end">
            <li className="nav-item">
              {isLogin ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={userSignOut}
                >
                  Log out
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => showLoginComp(true)}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
