// miniatures IMPORTS
import cv_Gif from "./assets/cv.gif";
import cycling_Gif from "./assets/cycling.gif";
import question_Gif from "./assets/question.gif";
import MT_Gif from "./assets/MT.gif";
import TTT_Gif from "./assets/TTT.gif";
import leboncoin_Gif from "./assets/leboncoin.gif";
import francmanger_Img from "./assets/francmanger.jpg";
import airbnb_Img from "./assets/airbnb.jpg";
import thiswebsite_Gif from "./assets/thiswebsite.gif";

// Modales IMPORTS

import cv_Img from "./assets/cv.png";
import cycling_Img from "./assets/cycling.jpg";
import MT_Img from "./assets/MT.png";
import leboncoin_Img from "./assets/leboncoin.png";
import TTT_Img from "./assets/TTT.png";
import thiswebsite_Img from "./assets/thiswebsite.png";
import francmanger_Gif from "./assets/francmanger.gif";
import airbnb_Gif from "./assets/airbnb.gif";

/* # # # # # # ABOUT ME # # # # # # # # # # # # # # # */
const obj1 = {
  title: "About Me",
  gif: cv_Gif,
  img: cv_Img,

  description: `Hello, my name is Pierre. I’m a Paris based full stack software engineer. I'm always open to new projects propositions !
\n I graduaded from a computer science and telecom school and very recently updated my knowledges at Le Reacteur, a fullstack Node.js/React bootcamp based in Paris.
\n I enjoy developing front-end as well as back-end, as long as there is problems to solve, ideas to find, and anything new to learn.
\n
\n Feel free to ask me any questions and my CV by email.
`,
  button1: "Email me",
  link1: "mailto:7anudq2a3mvjkc7j@gmail.com",
  button2: "Check my Github",
  link2: "https://github.com/MgRl8ow3MhVr"
};
/* # # # # # # CYCLING AROUND # # # # # # # # # # # # # # # */
const obj2 = {
  // title: "When I don't code",
  title: "My other life",
  gif: cycling_Gif,
  img: cycling_Img,
  description: `When I'm not coding, you might see Ableton Live open on my mac, and if not behind my computer you might see me cycling on a lost road.
    \n>Travels
    \nIn 2012 I discovered the world on a 16.000km bicycle journey from Paris to Australia. I kept going later with two other travels on two wheels in Morocco and South America. 
    \n>Music
    I am a pianist, guitarist and I compose atmospheric electronic music, and I enjoy teaching any of this to beginners.
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
  description: `There is one cart left for a project together. Don't hesitate to contact me to tell me more about it.
    `
};
/* # # # # # # MEILLEUR TAUX # # # # # # # # # # # # # # # */
const obj4 = {
  title: "MeilleurTaux.com",
  gif: MT_Gif,
  img: MT_Img,
  description: `This is a fullstack simplified version of www.meilleurtaux.com, a french website that gives you quotes for loans.
A cookie and a React state help you save the datas you entered even if you close the tab. You will automatically come back to where you left the form.

I added a few sounds for the fun, and a back-office with a very ... "modern" design with a random color generator ;)
The percentage bar and its turning wheel are CSS home made !
    \n>stack
    \nFrontend: React, CSS, Axios, the Vipoco API is used to propose ZipCodes
    \nBackend: Node.js, express, mongoDB, MailGun
    `,
  button1: "Visit it",
  link1: "https://meilleurtauxpierre.netlify.com/",
  button2: "Github Repo",
  link2: "https://github.com/MgRl8ow3MhVr/meilleurtaux"
};
/* # # # # # # TICTACTOE # # # # # # # # # # # # # # # */
const obj5 = {
  title: "Giant Tic Tak Toe",
  gif: TTT_Gif,
  img: TTT_Img,
  description: `When I was bored in a classroom in highschool, I used to take a blank graph paper out of my bag, cross a first square, pass it to my neighbour and this was the beginning of long game of tic tac toe with no boundaries ! Any line of 4 X's or O's was worth one point.
    \n Here is the modern desktop version of it ! Enter a username and challenge anybody who is connected
    \n>stack
    \nFrontend: Node.js, React, CSS, Axios, 
    \nBackend: Node.js, express, websocket,
    \n>Next steps
    \nMore than 2 players play together(X vs O vs Y vs Z for example). Add a chatroom. Add a Database to save an on going game. Make it responsive for phone size, make an App out of it 
    `,
  button1: "Try it",
  link1: "https://giant-tic-tac-toe.netlify.com/",
  button2: "Github Repo",
  link2: "https://github.com/MgRl8ow3MhVr/x_tictactoe"
};
/* # # # # # # LEBONCOIN # # # # # # # # # # # # # # # */
const obj6 = {
  title: "Leboncoin.com",
  gif: leboncoin_Gif,
  img: leboncoin_Img,
  description: `This is a demo copy of french CraigList. Feel free to SignUp and post your own fake products.
\n>features:
\nConsult posts, filter by name, secure signup, secure login, create a post, upload multiple photos
\n>stack:
Front end is made with React. After you authentify, a Cookie will save the infos so you don't need to authent again
The BackEnd is made with javascript / express
The authentification is made with a salt/hash algorithm
The photos are hosted on Cloudinary service`,
  link1: "https://leboncoinfullstack.netlify.com/",
  button1: "Check it out live",
  link2: "https://leboncoinfullstack.netlify.com/",
  button2: "Github repo"
};
/* # # # # # # FRANC MANGER # # # # # # # # # # # # # # # */
const obj7 = {
  title: "Le Franc Manger",
  description: `This MVP was made for a parisian startup whose goal is to bring closer consumers and local farmers.
    \n>features
    The map is centered on the user localisation and shows all producers 30km around. You can filter the producers by type of products.
    \n>stack
    \nFrontend: ReactNative, geolocalisation,
    \nBackend: Node.js, express, mongoDB, Cloudinary`,
  gif: francmanger_Img,
  img: francmanger_Gif
};
/* # # # # # # AirBnB # # # # # # # # # # # # # # # */
const obj8 = {
  title: "Airbnb s",
  gif: airbnb_Img,
  img: airbnb_Gif,
  description: `This is a simplified version of the Airbnb app
    \n>features
    login, signup with profile photo upload, consultation of the places around, map view. 
    \n>stack
    \n Made with React Native`,
  link2: "https://github.com/MgRl8ow3MhVr/airbnbReactNative",
  button2: "Github repo"
};
/* # # # # # # THIS WEBSITE # # # # # # # # # # # # # # # */
const obj9 = {
  title: "this.website d",
  description:
    "I hope you enjoyed this website experience ! It was home made with react/html/css",
  gif: thiswebsite_Gif,
  img: thiswebsite_Img,
  // img: demo_mp4_cloud,
  link2: "https://pierredev.netlify.com/",
  button2: "recursive visit",
  link2: "https://github.com/MgRl8ow3MhVr/portfolio",
  button2: "Github repo"
};

export default [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];
