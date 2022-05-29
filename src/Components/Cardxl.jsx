import React from "react";
import "./Cardxl.css";
import Vector from "../Assets/Vector.png";
import Union from "../Assets/Union.png";

function Cardxl(props) {
  return (
    <div className="row row-cols-3 row-cols-md-3 g-5">
      <div class="col">
        <div class="card poo">
          <img src={props.imgg} class="card-img-top" alt="img" />
          <div class="card-body  ">
            <p class="heading">{props.head}</p>
            <h5 class="card-title">{props.title}</h5>
            <div class="d-flex justify-content-between">
              <p class="card-text ">
                More Info <img src={Vector} alt="icon" />
              </p>
              <div class="d-flex flex-row gap-5">
                <p>|</p>
                <img src={Union} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardxl;
