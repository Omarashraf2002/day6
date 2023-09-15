import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./Components/Layout";
import About from "./Components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Layout />
    <About />
    <Skills />
    <Portfolio />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
