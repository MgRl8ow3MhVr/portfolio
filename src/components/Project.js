import React from "react";
import Fade from "./Fade.js";

function Project({
  gif,
  description,
  show,
  setCarts,
  title,
  color,
  link,
  bigletter
}) {
  const pos = bigletter;

  return (
    <div
      className="cart"
      onClick={() => {
        setCarts();
      }}
      style={color && { backgroundColor: color }}
    >
      <div className={show ? "titlesin" : "titlesout"}>
        <div className={show ? "t2h" : "t2"}>{title.substring(0, pos)}</div>
        <div className={show ? "t1h" : "t1"}>{title.charAt(pos)}</div>
        <div className={show ? "t2h" : "t2"}>{title.substring(pos + 1)}</div>
      </div>

      <div className={show ? "description in" : "description out"}>
        <p>{description}</p>
      </div>
      <a className={show ? "visit in" : "visit out"} href={link}>
        visit
      </a>

      <Fade show={show}>
        <img src={gif} alt="gif" />
      </Fade>
    </div>
  );
}

export default Project;
