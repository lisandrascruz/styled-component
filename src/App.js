import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "components/pages/Login";
import Home from "components/pages/Home";
import Login from "components/pages/Login";

const GlobalStyles = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0%;
    color: black;
    font-family: 'Kaushan Script';
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
