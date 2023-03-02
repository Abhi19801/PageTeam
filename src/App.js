import React from "react";
import "./App.css";
import Container from "./Components/Container";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container/>
      <Sidebar/>

    </div>
  );
}

export default App;
