import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./componenta/home";




// About Page
function About() {
  return (
    <div className="page">
      <h2>About EduBlog</h2>
      <p>
        We are passionate educators and developers building free knowledge platforms. Our
        mission is to make education accessible for everyone through blogs and tutorials.
      </p>
    </div>
  );
}

// Blog Page
function Blog() {
  return (
    <div className="page">
      <h2>What is STEM Education?</h2>
      <p>
        STEM stands for Science, Technology, Engineering, and Mathematics. It's a
        multidisciplinary approach to learning that encourages students to think critically
        and solve real-world problems. STEM education helps bridge the gender and ethnic
        gaps found in math and science fields and prepares students for the future.
      </p>
      <h3>Benefits of STEM:</h3>
      <ul>
        <li>Enhances innovation and creativity</li>
        <li>Prepares for high-paying careers</li>
        <li>Promotes teamwork and problem-solving</li>
      </ul>
      <h3>Challenges in STEM:</h3>
      <p>
        Lack of access to resources, teacher training, and student engagement can hinder
        STEM implementation. However, global initiatives are making strides to solve this.
      </p>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div className="page">
      <h2>Contact Us</h2>
      <p>Email: info@edublog.com</p>
      <p>Phone: +91 12345 67890</p>
      <p>Address: 123 Knowledge Lane, EduCity</p>
    </div>
  );
}

// Privacy Policy Page
function Privacy() {
  return (
    <div className="page">
      <h2>Privacy Policy</h2>
      <p>
        At EduBlog, your privacy is important to us. We do not collect personal data without
        your consent. We may use cookies for improving your experience and displaying ads
        via third-party services like Google AdSense.
      </p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="logo">EduBlog</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 EduBlog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
