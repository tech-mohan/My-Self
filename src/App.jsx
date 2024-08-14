import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Router from "./Components/Router";
function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
