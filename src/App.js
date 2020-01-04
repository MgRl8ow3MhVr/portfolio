import React, { useState, useEffect } from "react";
import "./App.css";
import Project from "./components/Project.js";
import cartes from "./Cartes.js";
import sortProjects from "./components/SortLetters.js";
import Button from "./assets/button.png";
import RefreshCw from "./components/Button";

function App() {
  // const wordsList = ["malleret", "demos", "xxxx"];
  const wordsList = [
    "malleret",
    "react",
    "frontend",
    "fullstack",
    "r.native",
    "dev"
  ];
  const [carts, setCarts] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const [wordNum, setWordNum] = useState(-1);
  const [projetsList, setProjectList] = useState(cartes);
  const [modaleImg, setModaleImg] = useState(null);

  //pick a word from the list
  const pickAWord = () => {
    let num = wordNum;
    // while (num === wordNum) {
    //   num = Math.floor(Math.random() * wordsList.length);
    // }
    if (num === wordsList.length - 1) {
      num = 0;
    } else {
      num++;
    }
    setWordNum(num);
    setProjectList(sortProjects(wordsList[num], cartes));
  };

  //open one card
  const setACart = num => {
    const newValue = !carts[num];
    let arr = [];
    for (let i = 0; i < 9; i++) {
      if (i === num) {
        arr.push(newValue);
      } else arr.push(false);
    }
    setCarts(arr);
  };

  /* # # # # # # APP # # # # # # # # # # # # # # # # # # # # # # # # # # */

  return (
    <div className="app">
      <div className="header">PIERRE MALLERET</div>
      {/* <img src={Button} alt="button"  /> */}
      <div className="subtitle">
        <span>SELECTED PROJECTS</span>
        <div onClick={pickAWord}>
          {/* <span>try</span> */}
          <RefreshCw />
          {/* <span>me</span> */}
        </div>
      </div>

      <div className="gridprojects">
        {modaleImg && (
          <div className="modaleimg">
            <img
              src={modaleImg}
              alt="video"
              onClick={() => {
                setModaleImg(null);
              }}
            />
          </div>
        )}
        {[0, 1, 2].map(num => {
          return (
            <div className="projectscontenair" key={num * 10}>
              {projetsList.slice(num * 3, num * 3 + 3).map((projet, index) => {
                return (
                  <Project
                    key={num * 3 + index}
                    gif={projet.gif}
                    description={projet.description}
                    title={projet.title}
                    color={projet.color}
                    link={projet.link}
                    show={carts[num * 3 + index]}
                    setCarts={() => {
                      setACart(num * 3 + index);
                    }}
                    bigletter={projet.bigletter}
                    setModaleImg={setModaleImg}
                  />
                );
              })}
              {/* end of contenair of 3 */}
            </div>
          );
        })}
        {/* end of gridProject */}
      </div>
      {/* end of APp */}
    </div>
  );
}

export default App;
