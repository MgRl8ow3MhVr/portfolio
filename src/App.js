import React, { useState } from "react";
import "./App.css";
import Project from "./components/Project.js";
import Background from "./assets/background.jpg";

// GIF IMPORTS
import imggif from "./assets/imgtest.gif";
import github from "./assets/github.gif";
import cv from "./assets/cv.gif";
import meilleurtaux from "./assets/meilleurtaux.gif";
import leboncoin from "./assets/leboncoin.gif";

//DESCRIPTIONS
const description1 =
  "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun";

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

  return (
    <div className="app">
      <div className="header">Pierre Malleret</div>
      <div className="subtitle">About me</div>

      <div className="projectscontenair">
        {/* # # # # # # ABOUT ME # # # # # # # # # # # # # # # */}
        <Project
          gif={imggif}
          description={description1}
          show={carts[1]}
          setCarts={() => {
            setACart(1);
          }}
          title="About Me"
          color="#D8B4A0"
        />
        {/* # # # # # # DOWNLOAD CV # # # # # # # # # # # # # # # */}
        <Project
          gif={cv}
          description={description1}
          show={carts[0]}
          setCarts={() => {
            setACart(0);
          }}
          title="Download my CV"
          color="#D8B4A0"
        />

        {/* # # # # # # GITHUB # # # # # # # # # # # # # # # */}
        <Project
          gif={github}
          description={description1}
          show={carts[2]}
          setCarts={() => {
            setACart(2);
          }}
          title="Check my Github"
          color="#D8B4A0"
        />
      </div>
      <div className="subtitle">Selected Projects</div>
      <div className="projectscontenair">
        {/* # # # # # # MEILLEUR TAUX # # # # # # # # # # # # # # # */}

        <Project
          gif={meilleurtaux}
          description={description1}
          show={carts[3]}
          setCarts={() => {
            setACart(3);
          }}
          title="MeilleurTaux.com"
          link="https://meilleurtauxpierre.netlify.com/"
        />

        {/* # # # # # # LEBONCOIN # # # # # # # # # # # # # # # */}

        <Project
          gif={leboncoin}
          description={description1}
          show={carts[4]}
          setCarts={() => {
            setACart(4);
          }}
          title="Leboncoin"
          link="https://leboncoinfullstack.netlify.com/"
        />

        {/* # # # # # # ??? # # # # # # # # # # # # # # # */}

        <Project
          gif={imggif}
          description={description1}
          show={carts[5]}
          setCarts={() => {
            setACart(5);
          }}
          title="Giant Tic Tac Toe"
        />
      </div>
      <div className="projectscontenair">
        {/* # # # # # # ??? # # # # # # # # # # # # # # # */}

        <Project
          gif={meilleurtaux}
          description={description1}
          show={carts[6]}
          setCarts={() => {
            setACart(6);
          }}
          title="AirBnB"
          link="https://meilleurtauxpierre.netlify.com/"
        />

        {/* # # # # # # ??? # # # # # # # # # # # # # # # */}

        <Project
          gif={leboncoin}
          description={description1}
          show={carts[7]}
          setCarts={() => {
            setACart(7);
          }}
          title="LefrancManger"
          link="https://leboncoinfullstack.netlify.com/"
        />

        {/* # # # # # # DEVIVEROO # # # # # # # # # # # # # # # */}

        <Project
          gif={imggif}
          description={description1}
          show={carts[8]}
          setCarts={() => {
            setACart(8);
          }}
          title="Deliveroo"
        />
      </div>
    </div>
  );
}

export default App;
