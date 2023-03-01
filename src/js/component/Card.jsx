import React from "react";
import PropType from 'prop-types';

const Card = (props) => {
    return (
        <>
            
                <div className="card m-auto" >
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title d-flex justify-content-center">Card title</h5>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div class="card-footer">
                                <a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Find Out More!</a>
                                </div>
                </div>
           
        </>
    );
}


Card.propTypes = {
    imgSrc: PropType.string,
    title: PropType.string,
    text: PropType.string,
    btnUrl: PropType.string,
    btnLabel: PropType.string
}

export default Card;
