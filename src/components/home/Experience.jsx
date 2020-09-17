import React, { useState, useEffect, Profiler } from "react";
import Seefood from "../../editable-stuff/seefoodapp.jpg";
const divStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const Experience = () => {
  return (
    <div
      id="experience"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <div className="row">
          <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            <div className="col text-center">
              <img
                // className="border border-secondary rounded-circle"
                src={Seefood}
                alt="boeing logo"
                width="200"
                height="200"
              />
              <br />
              <br />
              <p className="lead text-center" style={{ fontSize: "22px" }}>
                Web Application Developer
                <br />
                May 2020 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
