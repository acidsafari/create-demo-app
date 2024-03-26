import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
//import NavigationToo from './Components/Navigation/NavigationToo';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <div className='MainAside'>
          <Main />
          <Aside />
        </div>
        <Footer />
    </div>
  );
}

export default App;

/* COUNTER EXAMPLE  
import React from "react";
import "./App.css";
import Button1 from "./components/Button1/Button1.jsx";
import Button2 from "./components/Button2/Button2.jsx";

function App() {
  return (
    <div>
      <h1>Higher-Order Components in React</h1>
      <Button1 />
      <Button2 />
    </div>
  );
}
export default App;
*/