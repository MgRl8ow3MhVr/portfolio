import React, { useState } from "react";
import "./App.css";
import Project from "./components/Project.js";
import cartes from "./Cartes.js";

function App() {
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

  /* # # # # # # TRI DES OBJETS # # # # # # # # # # # # # # # # # # # # # # # # # # */

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const findaword = (word, tabIn) => {
    //tableau de sortie avec 'pos du mot dans tab, pos de la lettre'
    let outtab = [];
    let tab = [...tabIn];
    // boucle sur les lettres a chercher
    for (let i = 0; i < word.length; i++) {
      //boucle sur les mots qu'on a dispo
      for (let j = 0; j < tab.length; j++) {
        //si on a trouvé la lettre dans le mot courant
        if (tab[j].title.toLowerCase().indexOf(word[i]) !== -1) {
          tab[j].bigletter = tab[j].title.toLowerCase().indexOf(word[i]);
          outtab.push(tab[j]);
          tab.splice(j, 1);
          break;
        }
        //si on arrive au bout sans trouver de lettre
        if (j === tab.length - 1) {
          return word[i];
        }
      }
    }
    //ici on a bien trouvé les lettres
    //completer le tableau de sortie avec les mots non utilisés
    tab.map(el => {
      el.bigletter = -1;
      outtab.push(el);
    });
    return outtab;
  };

  const findawordplus = word => {
    let tab = [...cartes];
    let currResult = findaword(word, tab);
    let occurence = 0;

    while (currResult.length === 1 && occurence < 50) {
      occurence++;
      // tab.unshift(tab.pop());
      shuffleArray(tab);
      currResult = findaword(word, tab);
      console.log(currResult);
    }

    return currResult;
  };

  let projetsList = findawordplus("fullstack");
  console.log("liste projets", projetsList);
  if (projetsList.length === 1) {
    console.log("pas trouve");
    projetsList = cartes;
    projetsList.map(proj => {
      proj.bigletter = -1;
    });
  }

  /* # # # # # # APP # # # # # # # # # # # # # # # # # # # # # # # # # # */

  return (
    <div className="app">
      <div className="header">Pierre Malleret</div>
      <div className="subtitle">Selected projects</div>
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
                />
              );
            })}
            {/* end of contenair of 3 */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
