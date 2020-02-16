import React from "react";
import Card from "./Card";

const CardList = ({ contacts }) => {
  const notFoundMessage = `No matches found`;

  return (
    <>
      {!contacts.length ? (
        <Card nameFirst={notFoundMessage} />
      ) : (
        contacts.map(contact => {
          return (
            <Card
              nameFirst={contact.name.first}
              nameLast={contact.name.last}
              pictureUrl={contact.picture.large} 
              email={contact.email}
            />
          );
        })
      )}
    </>
  );
};
export default CardList;
