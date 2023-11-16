import React, { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  On_Click?: MouseEventHandler;
  href: string;
  label: string;
  width: string;
  height: string;
  bgColor: string;
  textColor: string;
}
const Button: FC<ButtonProps> = ({
  On_Click,
  href,
  label,
  width,
  height,
  bgColor,
  textColor,
}) => {
  return (
    <Link
      // onClick={On_Click}
      to={href}
      className={`w-${width} h-${height} bg-${bgColor} py-4 px-7.5 rounded border border-transparent text-${textColor} font-bold`}
    >
      {label}
    </Link>
  );
};

export default Button;

// MainComponent.tsx
// import React, { MouseEventHandler } from 'react';
// import MyButton from './Button'; // Assuming Button.tsx is in the same directory

// const MainComponent: React.FC = () => {
//   const handleClick: MouseEventHandler = () => {
//     console.log('Button clicked!');
//     // Add your onClick logic here
//   };

//   return (
//     <div>
//       <h1>Main Component</h1>
//       <MyButton onClick={handleClick} label="Click me" width="px" height="px" bgColor="red-400" />
//     </div>
//   );
// };

// export default MainComponent;
