import BBA from "./bba";
import BCA from "./bca";
import BCOM from "./bcom";

function Home() {
  return (
    <div className="page">
      <h2>Welcome to EduBlog</h2>
      <p>
        EduBlog provides quality educational articles on science, technology,
        learning tips, and modern academic trends. Our goal is to help students
        and educators thrive.
      </p>
      <hr />
      <BCA />
      <hr />
      <BCOM />
      <hr />
      <BBA />
    </div>
  );
}

export default Home;
