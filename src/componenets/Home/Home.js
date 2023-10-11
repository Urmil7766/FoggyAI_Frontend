import React from "react";
import { BsTranslate } from "react-icons/bs";
import "./Home.css";
import Data from "./Data";
import Entry from "./Entry";

const Home = () => {
  return (
    <div className="home_page_data">
      <div className="home_page">
        <div className="topic">
          <div>{""}</div>
          <div className="topic_selected">AI Grammar Checker</div>
          <div className="topic_side">
            English{" "}
            <span className="BsTranslate">
              {" "}
              <BsTranslate />{" "}
            </span>
          </div>
        </div>

        
      </div>
      <Data />
        <Entry />
    </div>
  );
};

export default Home;
