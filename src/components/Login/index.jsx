import "./login.scss";

export default function LoginScreen() {
  return (
    <div className="login-screen-wrapper">
      <h2 className="login-screen-title">ShreeMediCare</h2>
      <div className="login-screen-modal">
        <h3>Log In</h3>
        <form className="login-form-wrapper">
          <div className="input-field phone-input">
            <label htmlFor="PhoneNoField">Phone no</label>
            <div className="phoneno-input-wrapper">
              <select className="phonno-country-code">
                <option>+91</option>
              </select>
              <input
                type="text"
                id="PhoneNoField"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="input-field otp-input">
            <label htmlFor="otpField">OTP</label>
            <input type="password" id="otpField" placeholder="Enter OTP" />
          </div>
          <button className="btn">Get OTP</button>
          <button className="btn">Log In</button>
        </form>
      </div>
    </div>
  );
}
