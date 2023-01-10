import { LightTheme } from "@freedom-ds/web";
import "./style.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  multipleThemesStitches: {
    values: [
      {
        name: "Light",
        theme: LightTheme,
      },
    ],
  },

  backgrounds: {
    default: "black",
    values: [
      {
        name: "black",
        value: "hsl(246 6.0% 9.0%)",
      },
      {
        name: "white",
        value: "#fff",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
