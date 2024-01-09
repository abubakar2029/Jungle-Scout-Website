import React from "react";

declare module 'react-step-progress-bar' {
  export interface Step {
    transition: string;
  }

  export interface ProgressBarProps {
    children: React.ReactNode[];
    percent: number;
    filledBackground: string;
  }

  export class ProgressBar extends React.Component<ProgressBarProps> {}

  export class StepProgressBar extends React.Component {
    render(): JSX.Element;
  }
}
