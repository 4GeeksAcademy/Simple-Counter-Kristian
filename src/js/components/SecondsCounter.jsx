import React from "react";

//create your first component
const SecondsCounter = () => {
	return (
    <div className="container text-center">
      <div className="row mt-4">
        <div className="col card border-3 opacity-50 m-2 fs-1 justify-content-center"><i class="fa-solid fa-clock"></i></div>
        <div className="col card border-3 opacity-50 m-2 fs-1">0</div>
        <div className="col card border-3 opacity-50 m-2 fs-1">0</div>
		<div className="col card border-3 opacity-50 m-2 fs-1">0</div>
        <div className="col card border-3 opacity-50 m-2 fs-1">0</div>
        <div className="col card border-3 opacity-50 m-2 fs-1">0</div>
		<div className="col card border-3 opacity-50 m-2 fs-1">0</div>
      </div>
    </div>
  );
};

export default SecondsCounter;