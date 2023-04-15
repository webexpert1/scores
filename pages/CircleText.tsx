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
  width: 70px;
  height: 70px;
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
