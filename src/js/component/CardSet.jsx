import React from "react";
import Card from "./Card";

export const CardSet = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
