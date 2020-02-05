import React from "react";
import Card from "./Card";
import { robots } from "../data/robots";

const CardList = () => {
  return (
    <>
      {robots.map(robot => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        );
      })}
    </>
  );
};
export default CardList;
