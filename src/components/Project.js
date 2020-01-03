import React, { useState, useEffect } from "react";
import Fade from "./Fade.js";

function Project({ gif, description, show, setCarts, title, color, link }) {
  useEffect(() => {
    if (!show) {
      setPos(2 + Math.floor(Math.random() * (title.length - 3)));
    }
  }, [show]);
  const [pos, setPos] = useState(
    2 + Math.floor(Math.random() * (title.length - 3))
  );

  return (
    <div
      className="cart"
      onClick={() => {
        setCarts();
      }}
      style={color && { backgroundColor: color }}
    >
      <div className={show ? "titlesin" : "titlesout"}>
        <div className={show ? "t2h" : "t2"}>{title.substring(0, pos - 1)}</div>
        <div className={show ? "t1h" : "t1"}>{title.charAt(pos - 1)}</div>
        <div className={show ? "t2h" : "t2"}>{title.substring(pos)}</div>
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
