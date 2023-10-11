import React from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

import {SemiCircleProgress} from 'react-semicircle-progressbar';


const ReviewFile = () => {
  return (
    <div>
      <SemiCircleProgress
        percentage={20}
        percentageSeperator="/100"
        size={{
          width: 250,
          height: 300,
        }}
        strokeWidth={5}
        fontStyle={{ 
            fontSize: "16px",
            fontWeight: "700"
        }}
        strokeColor="black"
        hasBackground={1}
        bgStrokeColor="white"
      />
    </div>
  );
};

export default ReviewFile;
