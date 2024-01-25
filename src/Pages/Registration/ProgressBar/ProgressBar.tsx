import React, { Fragment } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "material-icons/iconfont/material-icons.css";
import { ProgressBarData } from "../types";

interface Props {
  Data: ProgressBarData;
}
const ProgressSteps = ({ Data }: Props) => {
  return (
    <ProgressBar
      percent={Data.percent}
      filledBackground={Data.background ? Data.background : "#F57706"}
      height={Data.height ? Data.height : 2}
    >
      <Step transition="scale">
        {({ accomplished }) => (
          // accomplished ? <p>{accomplished} Ho gaya</p> : <p>{accomplished} Nahi ha</p>
          // accomplished ? (

          //   <i
          //     className={`material-icons w-5 h-5 inline rounded-[50%] bg-orange-500 pt-0.5 ${
          //       Data.percent >= 50 ? "" : "hidden"
          //     }`}
          //     style={{ fontSize: "18px", color: "white" }}
          //   >
          //     check_small
          //   </i>
          // ) : (
          //   <div
          //     className={`w-6 inline bg-white text-orange-500 aspect-square rounded-[50%] font-medium border-2 border-orange-500 ${
          //       Data.percent >= 50 ? "" : "hidden"
          //     }`}
          //   >
          //     1
          //   </div>
          // )

          <>
            <i
              className={`material-icons w-5 h-5 inline rounded-[50%] bg-orange-500 pt-0.5 ${
                Data.percent >= 50 ? "" : "hidden"
              }`}
              style={{ fontSize: "18px", color: "white" }}
            >
              check_small
            </i>
            <div
              className={`w-7 font-medium flex justify-center text-orange-500 bg-white items-center aspect-square rounded-[50%] border-2 border-orange-500  ${
                Data.percent >= 50 ? "hidden" : ""
              }`}
            >
              1
            </div>
          </>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) =>
          accomplished ? (
            <i
              className={`material-icons w-5 h-5 stroke-white fill-white inline-flex justify-center items-center rounded-[50%] bg-orange-500 pt-0.5 `}
              style={{ fontSize: "18px", color: "white" }}
            >
              check_small
            </i>
          ) : (
            <div
              className={`w-7 font-medium flex justify-center text-orange-500 bg-white items-center aspect-square rounded-[50%] border-2 border-orange-500 `}
            >
              2
            </div>
          )
        }
      </Step>
    </ProgressBar>
  );
};

export default ProgressSteps;
// import React from "react";
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";

// const ProgressSteps = () => {
//   return (
//     <ProgressBar
//       percent={44}
//       filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
//     >
//       <Step transition="scale">
//         {({ accomplished }) => (
//           <img
//             style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
//             width="30"
//             src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
//           />
//         )}
//       </Step>
//       <Step transition="scale">
//         {({ accomplished }) => (
//           <img
//             style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
//             width="30"
//             src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
//           />
//         )}
//       </Step>
//       <Step transition="scale">
//         {({ accomplished }) => (
//           <img
//             style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
//             width="30"
//             src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
//           />
//         )}
//       </Step>
//     </ProgressBar>
//   );
// };

// export default ProgressSteps;
