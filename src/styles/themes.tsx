const light = {
  palette: {
    background:
      "linear-gradient(38deg, rgba(232,234,254,1) 24%, #e9ebfd 52%, rgba(245,229,248,1) 91%);",
    text: "black",
    card: "white",
    highlight: "whitesmoke",
    primary: "rgba(58, 94, 202, 1)",
    primaryText: "white",
    primaryHighlight: "#497aff",
    bulb: "#dada31",
    success: "green",
    error: "red",
  },
  shadow: "rgba(255, 255, 255, 0.5) 0px 2px 8px 0px",
  radius: "10px",
  fontFamily: "'Rubik', sans-serif",
  size: (value: number) => `calc(60px * ${value})`,
  spacing: (value: number) => `calc(20px * ${value})`,
};

const themes = { light };

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      background: string;
      text: string;
      card: string;
      highlight: string;
      primary: string;
      primaryText: string;
      primaryHighlight: string;
      bulb: string;
      success: string;
      error: string;
    };
    shadow: string;
    radius: string;
    fontFamily: string;
    // eslint-disable-next-line no-unused-vars
    size: (value: number) => string;
    // eslint-disable-next-line no-unused-vars
    spacing: (value: number) => string;
  }
}

export default themes;
