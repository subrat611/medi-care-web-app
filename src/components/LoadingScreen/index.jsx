import "./loading.scss";

export default function LoadingScreen() {
  return (
    <div className="loading-wrapper">
      <div className="logo-wrapper">
        <div></div>
        <h2 className="loading-logo">ShreeMediCare</h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="loading-bg-texture">
        <path
          fill="#e1e5f2"
          fillOpacity="1"
          d="M0,256L80,256C160,256,320,256,480,224C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
