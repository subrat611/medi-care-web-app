import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import styles from "./login.module.scss";

export default function Login({ showLoginComp, setIsLogin, auth }) {
  const [isSend, setIsSend] = useState(false);
  const [phoneNo, setPhnNo] = useState("");
  const [otp, setOtp] = useState("");

  const generateRecaptchaVerifier = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-box",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const sendOTP = () => {
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNo, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...

        // set the otp field visible
        setIsSend(true);

        verifyOTP();
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  const verifyOTP = () => {
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        localStorage.setItem("FirebaseAccessToken", user.accessToken);
        setIsLogin(true);
        showLoginComp(false)
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  const getNumber = (e) => {
    let enterNum = Number(e.target.value);
    if (Number.isInteger(enterNum)) {
      if (e.target.value.length >= 10 && e.target.value.length < 13) {
        setPhnNo("+91".concat(e.target.value));
      }
    }
  };

  const getOTPFromServer = () => {
    generateRecaptchaVerifier();
    sendOTP();
  };

  const getOTPFromUser = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className={`${styles.login_wrapper}`}>
      <div
        className={`${styles.card_container} card shadow-sm bg-body-tertiary mx-3`}
      >
        {/* phone number field
          else 
            otp field  */}

        {!isSend ? (
          <div className="my-2">
            <label htmlFor="phoneno">Phone number</label>
            <div className="d-flex align-items-center">
              <span className="p-2 mt-2">+91</span>
              <input
                className={`${styles.card_inputNum} border border-bottom border-0 w-100 p-2 mt-2`}
                id="phoneno"
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) => getNumber(e)}
              />
            </div>
          </div>
        ) : (
          <div className="my-2">
            <label htmlFor="phoneno">Enter OTP</label>
            <input
              className={`${styles.card_inputNum} border border-bottom border-0 p-2 mt-2`}
              id="phoneno"
              type="text"
              placeholder="Enter 4 digit otp"
              onChange={(e) => getOTPFromUser(e)}
            />
          </div>
        )}

        {/* send btn */}
        {!isSend ? (
          <button
            type="btn"
            className="btn btn-custom-primary mt-3"
            onClick={getOTPFromServer}
          >
            Get OTP
          </button>
        ) : (
          <button
            type="btn"
            className="btn btn-custom-primary mt-3"
            onClick={verifyOTP}
          >
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
        <div id="recaptcha-box"></div>
      </div>
    </div>
  );
}
