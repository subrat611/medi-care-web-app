import React, { useState } from "react";

import styles from "./login.module.scss";

export default function Login({ showLoginComp }) {
  const [isSend, setSend] = useState(false);

  return (
    <div className={`${styles.login_wrapper}`}>
      <div
        className={`${styles.card_container} card shadow-sm bg-body-tertiary`}
      >
        {/* phone number field
          else 
            otp field  */}

        {!isSend ? (
          <div className="my-2">
            <label htmlFor="phoneno">Phone number</label>
            <input
              className={`${styles.card_inputNum} border border-bottom border-0 p-2 mt-2`}
              id="phoneno"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
        ) : (
          <div className="my-2">
            <label htmlFor="phoneno">Enter OTP</label>
            <input
              className={`${styles.card_inputNum} border border-bottom border-0 p-2 mt-2`}
              id="phoneno"
              type="text"
              placeholder="Enter 4 digit otp"
            />
          </div>
        )}

        {/* send btn */}
        {!isSend ? (
          <button type="btn" className="btn btn-custom-primary mt-3">
            Send OTP
          </button>
        ) : (
          <button type="btn" className="btn btn-custom-primary mt-3">
            Send
          </button>
        )}
        <button
          type="btn"
          className="btn btn-custom-danger mt-2"
          onClick={() => showLoginComp(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
