import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "will Smith", img: expert1 },
  { id: 2, name: "Chris Rock", img: expert2 },
  { id: 3, name: "Dwayne Rock", img: expert3 },
  { id: 4, name: "Messi Bhai", img: expert4 },
  { id: 5, name: "Ronaldo Kaka", img: expert5 },
  { id: 6, name: "Bale hala", img: expert6 },
];
const Experts = () => {
  return (
    <div className="container " id="experts">
      <h1 className="text-center text-primary fw-bold fs-1">Our Experts</h1>
      <div className="row gap-5 ">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
