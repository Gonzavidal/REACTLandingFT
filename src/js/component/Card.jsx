import React from "react";
import propTypes from "prop-types";

const Card = (props) => {
  return (
    <>
    <div className="card d-flex">
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
          <p className="card-text d-flex">{props.text}</p>
        </div>
        <div class="card-footer">
            <a className="text-aling-center" href="#" class="btn btn-primary" role="button" data-bs-toggle="button">{props.Button}</a>
        </div>
    </div>
    </>
  );
};

Card.propTypes = {
  imgSrc: propTypes.string,
  title: propTypes.string,
  text: propTypes.string,
  Url: propTypes.string,
  Button: propTypes.string,
};

export default Card;
