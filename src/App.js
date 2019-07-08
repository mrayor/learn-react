import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contact name="John Doe" email="jdoe@example.com" phone="231 234" />
        <Contact name="John Karen" email="kdoe@example.com" phone="233 456" />
      </div>
    </div>
  );
}

export default App;
