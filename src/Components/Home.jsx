import React from "react";
import icon from "../Assets/icon.png";
import search from "../Assets/search.png";
import Stroke from "../Assets/Stroke.png";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";

import img1 from "../Assets/Img (1).png";
import img2 from "../Assets/Img (2).png";
import img3 from "../Assets/Img (3).png";
import it from "../Assets/it.png";
import us from "../Assets/us.png";

import Card from "./Card";

import Cardxl from "./Cardxl";

import img11 from "../Assets/Img11.png";
import img22 from "../Assets/Img22.png";
import img33 from "../Assets/Img33.png";
import img44 from "../Assets/Img44.png";

import Label from "./Label";

import Vector1 from "../Assets/Vector1.png";
import calendarr from "../Assets/Calendar.png";
import left from "../Assets/left.png";
import right from "../Assets/right.png";
function Home() {
  return (
    <div className="qwe">
      <div className="bg-img mx-auto">
        <div className="container mx-auto ll">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={icon} alt="icon" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <img src={search} alt="search" /> Search
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <img className="stroke" src={Stroke} alt="stroke" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="Hero-text text-light ">
            <h1 className="h1">Cari Cari</h1>
            <h3 className="text-light h4">
              Live from their sofa to yours. Get closer to your favorite <br />{" "}
              artists, and never miss out.
            </h3>
          </div>
          <div className=" d-grid">
            <div class="label-main row row-cols-auto d-flex padding gap-1">
              <Label icon={Vector1} />
              <Label icon={calendarr} />
              <Label icon={calendarr} />
              <Label icon={calendarr} />
            </div>
          </div>
        </div>
        <div className="d-flex container justify-content-between">
          <h1 className="h3 text-light upcoming">Upcoming Shows</h1>
          <p className="viewall h4">View All</p>
        </div>
        <div className="container card-columns pb-5 pt-5 d-flex gap-4 justify-content-center align-content-center flex-wrap">
          <Cardxl imgg={img11} head="Folk" title="Benny Dayal" />
          <Cardxl imgg={img22} head="Bollywood" title="Vijay Yesudas" />
          <Cardxl imgg={img33} head="Folk" title="Andrea Jeremiah" />
          <Cardxl imgg={img44} head="Folk" title="Shilpa Rao" />
        </div>
        <div className="d-flex container justify-content-between">
          <h1 className="h3 text-light upcoming">Reviews</h1>
          <p className="text-light h4">
            1/12 <img src={left} alt="left" /> <img src={right} alt="right" />
          </p>
        </div>
        <div className="d-flex gap-4 justify-content-center align-content-center flex-wrap pt-4 pb-5">
          <Card img1={img1} img2={us} name="yooo" />
          <Card img1={img2} img2={it} name="gooo" />
          <Card img1={img3} img2={us} name="dooo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
