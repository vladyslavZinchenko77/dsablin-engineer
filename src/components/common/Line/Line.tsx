import { FC } from 'react';

interface LineProps {
  color?: string;
}

const Line: FC<LineProps> = ({ color = 'black' }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 141.7 42.5"
        fill="none"
        stroke={color}
        strokeWidth="8"
        width="50"
        height="50"
      >
        <path
          d="M12.9,10.5l12.5,21.6l12.4-21.6l12.5,21.6l12.5-21.6l12.4,21.6l12.5-21.6"
          opacity="1"
          pathLength="1"
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
        ></path>
        <path
          d="M83.6,17.6l18.8,10.8"
          opacity="1"
          pathLength="1"
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
        ></path>
        <path
          d="M100.2,32.1l12.5-21.6l12.4,21.6"
          opacity="1"
          pathLength="1"
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
        ></path>
      </svg>
    </div>
  );
};

export default Line;
