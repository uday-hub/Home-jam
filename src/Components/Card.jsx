import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="row ">
      <div className="col-sm-3">
        <div className="card foo">
          <div className="card-body too">
            <div className="main">
              <img src={props.img1} alt="img" />
              <div className="sub uoo">
                <h2>{props.name}</h2>
                <div className="yoo">
                  <img src={props.img2} alt="us" />
                  <h3>Palo Alto, CA</h3>
                </div>
              </div>
            </div>
            <p className="card-text text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              donec in nisi vitae. Vestibulum pellentesque eget laoreet
              adipiscing.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
