import React from "react";

const Card = ({ nameFirst, nameLast, pictureUrl, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {email ? <img src={pictureUrl} alt="Contact" /> : null}
      <div>
        <h2>{nameFirst} {nameLast}</h2>
        <h4>{email}</h4>
      </div>
    </div>
  );
};

export default Card;
