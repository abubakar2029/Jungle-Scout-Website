
export interface btnStyle {
  color: string;
  fontSize: string;
  backgroundColor: string;
  width: string;
  maxWidth?: string;
  height: string;
  padding?: string;
  fontWeight: number;
  border?: string;
}
export interface Button {
  text: string;
  href: string;
  style: btnStyle;
  hoverBgColor: string;
  shadow: boolean;
}
