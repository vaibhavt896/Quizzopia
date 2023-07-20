import React, { useState } from "react";

export default function Navbar() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand">Quizzopia</a>
        <form className="d-flex" role="search">
          <button className="btn btn-success" type="button" onClick={toggleAbout}>
            About
          </button>
        </form>
      </div>
      {showAbout && (
        <div className="about-overlay">
          <div className="about-content">
            <h1>About Quizzopia</h1>
            <p>
              Quizzopia is a quiz-based app that challenges your knowledge in various categories. It offers a fun and interactive way to test your understanding of different topics.
            </p>
            <p>
              The app presents a series of questions, and you need to choose the correct answer from the given options. Your score is calculated based on the number of correct answers you provide.
            </p>
            <p>
              Whether you want to learn something new or simply have some fun, Quizzopia has quizzes that cater to your interests. So, put on your thinking cap and start quizzing!
            </p>
            <button className="close-btn" onClick={toggleAbout}>
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
