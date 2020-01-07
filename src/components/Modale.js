import React from "react";
import Button from "./Button";
import Description from "./Description";

const Modale = ({ project }) => {
  return (
    <div className="modale">
      {/* this div to set a background gradient */}
      <img src={project.img ? project.img : project.gif} alt="img" />
      <div className="description">
        <div>
          <Button />
          <div>
            <Description text={project.description} />
          </div>
          <div className="buttons">
            {project.link1 && (
              <a href={project.link1} target="_blank">
                {project.button1}
              </a>
            )}
            {project.link2 && (
              <a href={project.link2} target="_blank">
                {project.button2}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* <a className="visit" href={project.link}>
              visit
            </a> */}
    </div>
  );
};
export default Modale;
