import { useState } from "react";

import { RecaptchaVerifier } from "firebase/auth";
import { phoneNumberSignIn, auth } from "../../config/firebase";

import "./login.scss";

export default function LoginScreen() {
  const [formFields, setFormFields] = useState({
    countryCode: "+91",
    phoneNo: "",
    otp: "",
  });
  const [confirmationResult, setConfirmationResult] = useState(null);

  const verifyRecaptcha = () => {
    return new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const handleFormField = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const getOtp = async () => {
    const phoneNumber = formFields.countryCode + formFields.phoneNo;

    if (formFields.phoneNo.length === 10) {
      const recaptcha = verifyRecaptcha();
      try {
        const confirmationResult = await phoneNumberSignIn(
          phoneNumber,
          recaptcha
        );
        setConfirmationResult(confirmationResult);
      } catch (err) {
        console.log("Error form LoginScren getOtp method: " + err);
      }
    }
  };

  const loginUser = () => {
    confirmationResult
      .confirm(formFields.otp)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-screen-wrapper">
      <h2 className="login-screen-title">ShreeMediCare</h2>
      <div className="login-screen-modal">
        <h3>Log In</h3>
        <div className="login-form-wrapper">
          <div className="input-field phone-input">
            <label htmlFor="PhoneNoField">Phone number</label>
            <div className="phoneno-input-wrapper">
              <select
                className="phonno-country-code"
                name="countryCode"
                value={setFormFields.countryCode}
                onClick={(e) => handleFormField(e)}
              >
                <option value="+91">+91</option>
              </select>
              <input
                type="text"
                id="PhoneNoField"
                placeholder="Enter phone number"
                name="phoneNo"
                value={formFields.phoneNo}
                onChange={(e) => handleFormField(e)}
              />
            </div>
          </div>
          <div className="input-field otp-input">
            <label htmlFor="otpField">OTP</label>
            <input
              type="password"
              id="otpField"
              placeholder="Enter OTP"
              name="otp"
              value={formFields.otp}
              onChange={(e) => handleFormField(e)}
            />
          </div>
          {formFields.otp != "" && formFields.otp.length === 6 ? (
            <button className="btn" onClick={loginUser}>
              Log In
            </button>
          ) : (
            <button className="btn" onClick={getOtp}>
              Get OTP
            </button>
          )}
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
}
