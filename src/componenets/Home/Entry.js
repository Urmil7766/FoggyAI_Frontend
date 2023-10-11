import React from "react";
import { ImAttachment } from "react-icons/im";
import { AiOutlineLink } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";
import { BsFillMicFill } from "react-icons/bs";

const Entry = () => {
  return (
    <div className="data_input">
      <div className="data_enter">
        <div className="data_attach">
          <div className="attach_im">
            <ImAttachment />
          </div>

          <div className="ai_outline">
            <AiOutlineLink />
          </div>
          <div className="drag"> Drag and Drop File are Here..</div>
        </div>

        <div className="input_search_voice">
          <span className="enter_">
            <input
              className="search_"
              placeholder="Start your imagination here, we create everything for you....."
            />
            <span className="iosend"><IoSendSharp/></span>
          </span>
          <span className="mic">
            <span className="bs"><BsFillMicFill/></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Entry;
