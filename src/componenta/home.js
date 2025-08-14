import ProPushScript from "./ad-pro-push";
import BBA from "./bba";
import BCA from "./bca";
import BCOM from "./bcom";
import "./home.css";
import Landing from "./landing";

function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        {/* <img
          src="./ssmain.png"
          style={{
            width: "100%",
          }}
        /> */}
      </div>
      <Landing />
      <ProPushScript />
      <div
        className="page"
        style={
          {
            // position:"relative"//
          }
        }
      >
        {/* <div className="main">
          <div className="image-container">
            <img src="./ss1.png" className="ss1_img" />
          </div>
        </div> */}
        <h2>Welcome to EduBlog</h2>
        <p>
          EduBlog provides quality educational articles on science, technology,
          learning tips, and modern academic trends. Our goal is to help
          students and educators thrive.
        </p>
        <hr />
        <BCA />
        <hr />
        <BCOM />
        <hr />
        <BBA />
      </div>
    </>
  );
}

export default Home;
