import React from "react";

// GIF IMPORTS
import imggif from "./assets/imgtest.gif";
import github from "./assets/github.gif";
import cv_Gif from "./assets/cv.gif";
import cv_Img from "./assets/cv.png";
import meilleurtaux from "./assets/meilleurtaux.gif";
import leboncoin_Gif from "./assets/leboncoin.gif";
import leboncoin_Img from "./assets/leboncoin.png";
import francmanger from "./assets/francmanger.gif";
import deliveroo from "./assets/deliveroo.gif";
import airbnb from "./assets/airbnb.gif";

// IMAGES IMPORTS

/* # # # # # # ABOUT ME # # # # # # # # # # # # # # # */
const obj1 = {
  title: "About Me",
  gif: cv_Gif,

  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun"
  // color: "#D8B4A0"
};
/* # # # # # # DOWNLOAD CV # # # # # # # # # # # # # # # */
const obj2 = {
  title: "Download my CV",
  gif: cv_Gif,
  img: cv_Img,
  description: JSON.stringify("<h1>yrdy</h1>"),
  link: "./CVDevPierre2020.pdf"
};

/* # # # # # # GITHUB # # # # # # # # # # # # # # # */
const obj3 = {
  title: "Check my Github",
  gif: github,
  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun"
  // color: "#D8B4A0"
};
/* # # # # # # MEILLEUR TAUX # # # # # # # # # # # # # # # */
const obj4 = {
  title: "MeilleurTaux.com",
  gif: meilleurtaux,
  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun",
  link: "https://meilleurtauxpierre.netlify.com/"
};
/* # # # # # # TICTACTOE # # # # # # # # # # # # # # # */
const obj5 = {
  title: "Giant Tic Tac Toes",
  gif: leboncoin_Gif,
  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun",
  link: "https://giant-tic-tac-toe.netlify.com/"
};
/* # # # # # # LEBONCOIN # # # # # # # # # # # # # # # */
const obj6 = {
  title: "Leboncoin",
  gif: leboncoin_Gif,
  img: leboncoin_Img,
  description: `
>Description
\nThis is a copy of french CraigList. This is a fullstack project with back-end running on HeroKu. Feel free to post your own fake products.
\n>Feel Free to create your own posts:
\n- Consult other people posts, filter by name
\n- Create an account with a secured password
\n- Login
\n- Create a post under your own login, upload multiple photos with drag and drop
Technical:
Front end is made with React. After you authentify, a Cookie will save the infos so you don't need to authent again
The BackEnd is made with javascript / express
The authentification is made with a salt/hash algorithm
The photos are hosted on Cloudinary service`,
  link: "https://leboncoinfullstack.netlify.com/"
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
/* # # # # # # DEliveroo # # # # # # # # # # # # # # # */
const obj9 = {
  title: "Deliveroo",
  gif: deliveroo,
  description:
    "Simulation of a bank credit. Conservation of data if the user leaves the page through a cookie. Technologies used: React, Node.js, Javascript, backend, mailgun"
};

export default [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];
