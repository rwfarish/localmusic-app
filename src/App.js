import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MainContent from "./components/MainContent";
import Home from "./pages/Home";

function App() {
  const [signedInUser, setSignedInUser] = useState(undefined);

  console.log(signedInUser);
  return (
    <>
      <Home signedInUser={signedInUser} setSignedInUser={setSignedInUser} />
      <MainContent
        signedInUser={signedInUser}
        setSignedInUser={setSignedInUser}
      />
    </>
  );
}

export default App;
