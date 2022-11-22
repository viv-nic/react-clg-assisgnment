// import React from "react";
import "./App.css";
// import Todo from "./components/todo";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/home">
        Home
      </Route>
      <Route path="/about">
        About
      </Route>
    </div>
  );
}

export default App;
