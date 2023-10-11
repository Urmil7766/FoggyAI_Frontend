import React from "react";
import "./Sidebar.css";
import { BsMagic } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { SiYoutube } from "react-icons/si";
import { LiaBookSolid } from "react-icons/lia";
import { BsFillPersonFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import SidebarData from "./SidebarData";

const Sidebar = () => {
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

        <div className="sidebar_third">
          <div>
            <div className="correct">Correct Sentence</div>
            <div className="data">
              <span className="BiMessageDetail">
                <BiMessageDetail />
              </span>
              <SidebarData data={"Hi! whats going on?"} />{" "}
            </div>
            <div className="data">
              <span className="BiMessageDetail">
                <BiMessageDetail />
              </span>
              <SidebarData data={"Hey! how are you doing?"} />{" "}
            </div>
            <div className="data">
              <span className="BiMessageDetail">
                <BiMessageDetail />
              </span>
              <SidebarData data={"Hi! whats going on?"} />{" "}
            </div>
            <div className="data">
              <span className="BiMessageDetail">
                <BiMessageDetail />
              </span>
              <SidebarData data={"Hi! whats going on?"} />{" "}
            </div>
            <div className="data">more content ....</div>
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
                <span> Rakash Sharma </span>{" "}
              </div>
              <div className="BsThreeDotsVertical">
                <BsThreeDotsVertical />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
