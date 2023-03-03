import React from "react";
import Card from "./Card.jsx";

export const CardSet = () => {
  return (
    <div className="container-fluid d-flex">
      <div className="row">
        <div className="col-3">
        <Card imgSrc="https://via.placeholder.com/500x325" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." Button="Find Out More!" />
        </div>
        <div className="col-3">
        <Card imgSrc="https://via.placeholder.com/500x325" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." Button="Find Out More!" />
        </div >
        <div className="col-3">
        <Card imgSrc="https://via.placeholder.com/500x325" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." Button="Find Out More!" />
        </div>
        <div className="col-3">
        <Card imgSrc="https://via.placeholder.com/500x325" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." Button="Find Out More!" />
        </div>
      </div>
    </div>
  );
};

/*

<div className="container-fluid">
				<div className="row row-cols-3 g-3">
					<div className="col-sm-3 com-md-3">
						<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
					</div>
					<div className="col-sm-3 com-md-3">
						<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
					</div>
					<div className="col-sm-3 com-md-3">
						<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
					</div>
					<div className="col-sm-3 com-md-3">
						<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
					</div>
				</div>
			</div>

*/