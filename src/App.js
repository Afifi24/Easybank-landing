import React from "react";
import Header from "./components/Header";
import Globalstyle from "./components/Globalstyle";
import Main from "./components/Main";
import Hero from './components/hero'
import Article from "./components/Article";
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Globalstyle/>
     <Header/>
    <Main/>
    <Hero/>
    <Article/>
   <Footer/>
    </div>
  );
}

export default App;
