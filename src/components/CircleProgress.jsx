import React from "react";
import styled from "styled-components";

const CircleProgressStyles = styled.div`
  .skill {
    width: 160px;
    height: 160px;
    /* background: cornflowerblue; */
    position: relative;
    .outer {
      width: 160px;
      height: 160px;
      border-radius: 50%;

      padding: 20px;
      box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
        -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
      .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
          inset -4px 4px 6px -1px rgba(255, 255, 255, 0.7),
          -0.5px -0.5px 0px rgba(255, 255, 255, 1),
          0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
          0px 12px 10px -10px rgba(0, 0, 0, 0.05);

        #number-progress {
          font-weight: 600;
          color: #555;
        }
      }
    }
    circle {
      fill: none;
      stroke: cornflowerblue;
      stroke-width: 20px;
      stroke-dasharray: 472;
      stroke-dashoffset: 472;
      animation: anim 2s linear forwards;
    }
    svg {
      position: absolute;
      top: 0;
      left: 0;
    }
    @keyframes anim {
      100% {
        stroke-dashoffset: 165;
      }
    }
  }
`;

export default function CircleProgress() {
  let number = 65;
  // let counter = 0;
  // setInterval(() => {
  //   if (counter == number) {
  //     clearInterval();
  //   } else {
  //     counter += 1;
  //     number = counter + "%";
  //   }
  // }, 20);

  return (
    <CircleProgressStyles>
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div id="number-progress">{number}%</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" />
          {/* <circle cx="80" cy="80" r="70" stroke-linecap="round" /> */}
        </svg>
      </div>
    </CircleProgressStyles>
  );
}
