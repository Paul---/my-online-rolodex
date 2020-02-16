import React from "react";

const Card = ({ nameFirst, nameLast, pictureUrl, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {email ? <img src={pictureUrl} alt="Contact" /> : null}
      <div>
        <h2>{nameFirst}</h2>
        <h2>{nameLast}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
