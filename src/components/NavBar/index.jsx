import React from "react";

import styles from "./navbar.module.scss";

export default function NavBar({ showLoginComp }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ShreeMediCare
        </a>
        <div>
          <ul className="navbar-nav w-100 justify-content-end">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => showLoginComp(true)}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
