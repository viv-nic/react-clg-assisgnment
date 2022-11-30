import React from "react";
import "./styles.css";
import Todo from "./components/todo";
import List from "./components/List/List";

export default function App() {
  return (
    <main>
      <Todo />
      <List />
    </main>
  );
}
