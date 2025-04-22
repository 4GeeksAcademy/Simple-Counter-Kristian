import React from "react";

//create your first component
const SecondsCounter = (props) => {
	return (
    <div className="container text-center">
      <div className="row mt-4">
        <div className="col card border-3 opacity-50 m-2 box justify-content-center"><i class="fa-solid fa-clock"></i></div>
        <div className="col card border-3 opacity-50 m-2 box">{props.sixthDig}</div>
        <div className="col card border-3 opacity-50 m-2 box">{props.fifthDig}</div>
		<div className="col card border-3 opacity-50 m-2 box">{props.fourthDig}</div>
        <div className="col card border-3 opacity-50 m-2 box">{props.thirdDig}</div>
        <div className="col card border-3 opacity-50 m-2 box">{props.secondDig}</div>
		<div className="col card border-3 opacity-50 m-2 box">{props.firstDig}</div>
      </div>
    </div>
  );
};

export default SecondsCounter;