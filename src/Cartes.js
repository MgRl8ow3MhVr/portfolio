import React from "react";

// GIF IMPORTS
import github from "./assets/github.gif";
import cv_Gif from "./assets/cv.gif";
import cv_Img from "./assets/cv.jpg";
import cycling_Gif from "./assets/cycling.gif";
import cycling_Img from "./assets/cycling.jpg";
import question_Gif from "./assets/question.gif";
import question_Img from "./assets/question.gif";
import MT_Gif from "./assets/MT.gif";
import MT_Img from "./assets/MT.png";
import leboncoin_Gif from "./assets/leboncoin.gif";
import leboncoin_Img from "./assets/leboncoin.png";
import francmanger from "./assets/francmanger.gif";
import airbnb from "./assets/airbnb.gif";

// IMAGES IMPORTS

/* # # # # # # ABOUT ME # # # # # # # # # # # # # # # */
const obj1 = {
  title: "About Me",
  gif: cv_Gif,
  img: cv_Img,

  description: `
Hello,
\n My name is Pierre. I’m a Paris based full stack software engineer, always open to new projects propositions !
\n I graduaded from a computer science and telecom school and recently updated my knowledges at Le Reacteur, a Javascript/React bootcamp based in Paris .
\n I enjoy developing frontend as well as back end, as long as there is problems to resolve, ideas to find, visuals to create, and I continue to learn
\n
\n Feel free to ask me any questions, or ask for my CV.
`,
  button1: "Email me",
  link1: "mailto:7anudq2a3mvjkc7j@gmail.com",
  button2: "Check my Github",
  link2: "https://github.com/MgRl8ow3MhVr"
};
/* # # # # # # CYCLING AROUND # # # # # # # # # # # # # # # */
const obj2 = {
  title: "When I don't code",
  gif: cycling_Gif,
  img: cycling_Img,
  description: `
    When I'm not coding, you might see me on a bicycle or composing music!
    \n>Travels
    
    \nIn 2012 I discovered the world on a 16.000km bicycle journey from Paris to Australia. Later I kept going with two other travels on two wheels. 
    \n>Music
    I am a pianist, guitarist and I compose atmospheric electronic music.
    `,
  button1: "More travels",
  link1: "www.pierrequiroulevoyages.com",
  button2: "More music",
  link2: "https://soundcloud.com/map_composer"
};

/* # # # # # # YOUR PROJECT # # # # # # # # # # # # # # # */
const obj3 = {
  title: "Your project !",
  gif: question_Gif,
  img: question_Gif,
  description: `
There is one more cart left for the next project we'll work on together!`
};
/* # # # # # # MEILLEUR TAUX # # # # # # # # # # # # # # # */
const obj4 = {
  title: "MeilleurTaux.com",
  gif: MT_Gif,
  img: MT_Img,
  description:
    "Simulation of a bank credit form, copy of www.meilleurtaux.com Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun",
  button1: "Visit it",
  link1: "https://meilleurtauxpierre.netlify.com/",
  button2: "Github Repo",
  link2: "https://github.com/MgRl8ow3MhVr/meilleurtaux"
};
/* # # # # # # TICTACTOE # # # # # # # # # # # # # # # */
const obj5 = {
  title: "Giant Tic Tac Toe",
  gif: leboncoin_Gif,
  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun",
  link: "https://giant-tic-tac-toe.netlify.com/"
};
/* # # # # # # LEBONCOIN # # # # # # # # # # # # # # # */
const obj6 = {
  title: "Leboncoin.com",
  gif: leboncoin_Gif,
  img: leboncoin_Img,
  description: `
This is a demo copy of french CraigList. Feel free to SignUp and post your own fake products.
\n>Fonctionalites:
\nConsult posts, filter by name, secure signup, secure login, create a post, upload multiple photos
\n>Technos inside:
Front end is made with React. After you authentify, a Cookie will save the infos so you don't need to authent again
The BackEnd is made with javascript / express
The authentification is made with a salt/hash algorithm
The photos are hosted on Cloudinary service`,
  link1: "https://leboncoinfullstack.netlify.com/",
  button1: "Github repo",
  link2: "https://leboncoinfullstack.netlify.com/",
  button2: "Check it out live"
};
/* # # # # # # FRANC MANGER # # # # # # # # # # # # # # # */
const obj7 = {
  title: "Le Franc Manger",
  gif: francmanger,
  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun"
};
/* # # # # # # AirBnB # # # # # # # # # # # # # # # */
const obj8 = {
  title: "Airbnb",
  gif: airbnb,
  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun"
};
/* # # # # # # THIS WEBSITE # # # # # # # # # # # # # # # */
const obj9 = {
  title: "This website",
  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun"
};

export default [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];
