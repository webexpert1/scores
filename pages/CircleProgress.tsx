import { FunctionComponent } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface Props {
  percentage: number;
  text: string;
  strokeWidth?: number;
  color?: string;
}

const CircleContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

const CircleText: FunctionComponent<Props> = ({
  percentage,
  text,
  strokeWidth = 10,
  color = "#000000",
}) => {
  return (
    <CircleContainer>
      <CircularProgressbar
        value={percentage}
        text={text}
        strokeWidth={1}
        styles={buildStyles({
          textSize: "20px",
          textColor: "#000000",
          pathColor: color,
          trailColor: "#d6d6d6"
        })}
      />
    </CircleContainer>
  );
};

export default CircleText;




// // import styled from 'styled-components';

// // type Props = {
// //   percentage: number;
// //   color: string;
// //   text: string;
// // };

// // const CircleContainer = styled.div`
// //   position: relative;
// //   width: 100px;
// //   height: 100px;
// //   border-radius: 50%;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   font-size: 16px;
// //   font-weight: bold;
// // `;

// // const CircleText = styled.div<Props>`
// //   position: absolute;
// //   top: 50%;
// //   left: 50%;
// //   transform: translate(-50%, -50%);
// //   color: black;
// // `;

// // const CircleSVG = styled.svg<Props>`
// //   width: 100px;
// //   height: 100px;

// //   circle {
// //     fill: none;
// //     stroke: black;
// //     stroke-width: 8px;
// //     stroke-dasharray: ${props => props.percentage} 200;
// //     stroke-dashoffset: 25;
// //     stroke-linecap: round;
// //     transition: stroke 0.2s ease-in-out;
// //     stroke: ${props => props.color || 'black'};
// //   }
// // `;

// // const Circle: React.FC<Props> = ({ percentage, color, text }) => {
// //   return (
// //     <CircleContainer>
// //       <CircleSVG percentage={percentage} color={color}>
// //         <circle cx="50%" cy="50%" r="42%" />
// //       </CircleSVG>
// //       <CircleText>{text}</CircleText>
// //     </CircleContainer>
// //   );
// // };

// // export default Circle;


// // import styled from 'styled-components';

// // type CircleProps = {
// //   text: string;
// // };

// // const Circle = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   width: 100px;
// //   height: 100px;
// //   border-radius: 50%;
// //   border: 2px solid #000;
// //   font-size: 24px;
// //   font-weight: bold;
// // `;

// // const CircleText: React.FC<CircleProps> = ({ text }) => {
// //   return (
// //     <Circle>
// //       {text}
// //     </Circle>
// //   );
// // };

// // export default CircleText;

// import styled from 'styled-components';

// type CircleProps = {
//   text: string;
//   percentGreen: number;
// };

// const Circle = styled.div<{ percentGreen: number }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100px;
//   height: 100px;
//   border-radius: calc(50% - 1px); /* Subtract border width */
//   border: 1px s;
//   border-color: red;
//   font-size: 24px;
//   font-weight: bold;
// `;

// const CircleText: React.FC<CircleProps> = ({ text, percentGreen }) => {
//   return <Circle percentGreen={percentGreen}>{text}</Circle>;
// };

// export default CircleText;


