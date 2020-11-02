import React from "react";
import "./css/App.css";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Mypage from "./components/Mypage.jsx";


 const App = () =>  {
  return (
    <div className = "app_wrapper">
      <Header/>
      <Navigation/>
      <Mypage/>
    </div>
  );
}

export default App;

