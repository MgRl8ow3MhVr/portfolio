import React, { useState, useEffect } from "react";
import "./App.css";
import Project from "./components/Project.js";
import cartes from "./Cartes.js";
import sortProjects from "./components/SortLetters.js";
import Button from "./components/Button";
import Modale from "./components/Modale";

function App() {
  // const wordsList = ["malleret", "demos", "xxxx"];
  const wordsList = [
    // "malleret",
    // "react",
    // "frontend",
    // "fullstack",
    // "r.native",
    "malleret"
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
  const [modaleNum, setModaleNum] = useState(null);

  //pick a word from the list
  const pickAWord = () => {
    let num = wordNum;
    if (num === wordsList.length - 1) {
      num = 0;
    } else {
      num++;
    }
    setWordNum(num);
    setProjectList(sortProjects(wordsList[num], cartes));
  };
  //and use it with first word of the list
  useEffect(() => {
    pickAWord(wordNum);
  }, []);

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
    <div
      className="app"
      onClick={() => {
        setModaleNum(null);
      }}
    >
      <div className="header">PIERRE MALLERET</div>
      <div className="subtitle">
        <span>SELECTED PROJECTS</span>
        <div onClick={pickAWord}>
          <Button />
        </div>
      </div>

      <div
        className="gridprojects"
        onClick={event => {
          event.stopPropagation();
          // setModaleNum(null);
        }}
      >
        {/* MODAL TO WATCH ONE */}
        {modaleNum !== null && <Modale project={projetsList[modaleNum]} />}
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
                    setModaleNum={setModaleNum}
                    index={num * 3 + index}
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
