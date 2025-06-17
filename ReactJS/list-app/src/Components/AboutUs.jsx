import React from "react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import FeedbackCard from "./FeedbackCard";

const AboutUs = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Rahul Kumar",
      feedback:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibu lum nibh.Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.",
      role: "Customer",
      image: profile1,
    },
    {
      id: 1,
      name: "Shruti Sharma",
      feedback:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibu lum nibh.Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.",
      role: "Customer",
      image: profile2,
    },
    {
      id: 1,
      name: "Rahul Kumar",
      feedback:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibu lum nibh.Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.",
      role: "Customer",
      image: profile1,
    },
    {
      id: 1,
      name: "Shruti Sharma",
      feedback:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibu lum nibh.Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.",
      role: "Customer",
      image: profile2,
    },
  ];

  return (
    <div className="about">
      <div id="heading">
        <h2>What Customers Say About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus
          viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum
          nibh.
        </p>
      </div>

      <div className="feedbacks">
        {feedbacks.map((item) => (
          <FeedbackCard
            name={item.name}
            feedback={item.feedback}
            role={item.role}
            image={item.image}
          />

          //   <div className="box">
          //     <div className="profile">
          //       <img src={item.image} alt="profile picture" />
          //       <div className="info">
          //         <h3>{item.name}</h3>
          //         <p>{item.role}</p>
          //       </div>
          //     </div>
          //     <p className="review">{item.feedback}</p>
          //   </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
