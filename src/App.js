import React from "react";
import "./App.css";
import { Route } from "react-router-dom";


export default function App() {
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
