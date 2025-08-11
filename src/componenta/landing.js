import React, { useEffect, useState } from "react";
import "./landing.css";

const Landing = () => {
  const [status, setStatus] = useState(Notification.permission); // default status

//   const requestPermission = () => {
//     Notification.requestPermission().then((permission) => {
//       console.log("Permission result:", permission);
//       setStatus(permission);
//     });
//   };

  useEffect(() => {
    // Check current permission
    if (Notification.permission === "granted") {
      console.log("✅ Permission already granted");
    } else if (Notification.permission === "denied") {
      console.log("❌ Permission denied");
    } else if (Notification.permission === "default") {
      console.log("ℹ️ Permission not yet asked");
    //   setTimeout(() => {
    //     requestPermission();
    //   }, 10000);
    }
  }, []);
  return (
    <>
      <div className="relative-landing">
        <div className="absolute-landing">
          <p>Click "Allow" to watch videos</p>
        </div>
      </div>
      <div className="main-div">
        <div className="main-img">
          <img src="./ss2.png" />
        </div>
        <div className="main-img">
          <img src="./ss6.png" />
        </div>
        <div className="main-img">
          <img src="./ss4.png" />
        </div>
        <div className="main-img">
          <img src="./ss3.png" />
        </div>

        <div className="main-img">
          <img src="./ss7.png" />
        </div>
        <div className="more-btn">Show more related videos</div>
      </div>
    </>
  );
};

export default Landing;
