import React from "react";

const FeedbackCard = ({ name, feedback, role, image }) => {
  return (
    <div className="box">
      <div className="profile">
        <img src={image} alt="profile picture" />
        <div className="info">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <p className="review">{feedback}</p>
    </div>
  );
};

export default FeedbackCard;
