import React from "react";
import "./Label.css";

function Label(props) {
  return (
    <div>
      <div class="col pt-5 main-label">
        <div className="card label-card">
          <div className="card-body label-body">
            <h5 className="card-title">
              <img src={props.icon} alt="calendar" />
            </h5>
            <p className="card-text h3">0</p>
            <p href="#" className="card-link">
              Label
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Label;
