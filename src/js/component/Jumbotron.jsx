import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
  return (
    <div className="jumbotron p-3 mb-4 bg-secondary text-black bg-opacity-25">
      <h1 className="display-3">A Warm Welcome!</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <br></br>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Call to Action!
      </a>
    </div>
  );
};

export default Jumbotron;
