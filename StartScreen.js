import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div className = "start-screen">
      <h1 className ="start-h1">Welcome to the Quiz!</h1>
      <div className="d-grid gap-2 col-6 mx-auto">
  <button type="button" className="btn btn-outline-success" onClick={onStart}>Start</button>

</div>

    </div>
  );
}
