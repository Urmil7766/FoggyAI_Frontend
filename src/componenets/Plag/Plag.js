import React from "react";
import "../Sidebar/Sidebar.css";
import { BsMagic } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { SiYoutube } from "react-icons/si";
import { LiaBookSolid } from "react-icons/lia";
import { BsFillPersonFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import ReviewFile from "./ReviewFile";


const Plag = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_inside">
        <div className="statistics">Content Statistics</div>
        <div className="sidebar_first">
          <div className="tone">
            <div className="box"></div>
            <div className="text">Tone</div>
          </div>
          <div className="type">
            <div className="box"></div>
            <div className="text">Type</div>
          </div>
          <div className="usage">
            <div className="box"></div>
            <div className="text">Usage</div>
          </div>
        </div>

        <div className="speedometer">
          <ReviewFile />
        </div>

        <div className="speedo_down">
          <div className="speedo_data">
            <div className="plag_found">Plagiarism found</div>
            <div className="repeated_word">Repeated words</div>
            <div className="content_prof">Content Uniqueness</div>
          </div>
        </div>

        <div className="box1">
          <div>{""}</div>
          <div className="text_auto">Autocorrect</div>
          <div className="BsMagic">
            <BsMagic />
          </div>
        </div>

        <div className="sidebar_final">
          <div className="tut_guide">
            <div className="tutorial">
              {" "}
              <span className="SiYoutube">
                {" "}
                <SiYoutube />{" "}
              </span>
              Tutorials{" "}
            </div>
            <div className="guide ">
              {" "}
              <span className="LiaBookSolid">
                {" "}
                <LiaBookSolid />{" "}
              </span>{" "}
              Guide
            </div>
          </div>
          <div className="account">
            <div className="acc">
              <div className="user_name">
                {" "}
                <span className="BsFillPersonFill">
                  {" "}
                  <BsFillPersonFill />
                </span>{" "}
                <span> Rakesh Sharma </span>{" "}
              </div>
              <div className="BsThreeDotsVertical">
                <BsThreeDotsVertical />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plag