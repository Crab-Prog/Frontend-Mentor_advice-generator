import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header"
import './App.css';
import divider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg"
function App() {
  const [adviceCard, setAdviceCard] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    getAdvices();
  }, []);

  useEffect(() => {
    getAdvicesId();
  }, []);

  const getAdvices = () => {
    axios.get(`https://api.adviceslip.com/advice`)
      .then((response) => response.data.slip.advice)
      .then((data) => {
        console.log(data);
        setAdviceCard(data);
      });

  }
  const getAdvicesId = () => {
    axios.get(`https://api.adviceslip.com/advice`)
      .then((response) => response.data.slip.id)
      .then((data) => {
        console.log(data);
        setId(data);
      });

  }
  const getAll = () => {
    getAdvices();
    getAdvicesId();
 }
  return (
    <body>
      <div className="full-card">
        <header>
          <Header id={id} />
        </header>
        <div>
          <main className="main-card">
            <blockquote> “{adviceCard}”</blockquote>

          </main>

          <footer className="footer-card">
            <img src={divider} alt="" className="divider" />
            <img src={dice} alt="" className="btn" onClick={getAll}/>
          </footer>
        </div>
      </div>
      <div class="attribution">
    <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/Crab-Prog">Ophélie Coudert</a>.</p>
  </div>
    </body>
  );
}

export default App;
