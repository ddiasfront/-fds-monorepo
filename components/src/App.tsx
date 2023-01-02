import { globalStyles } from "@freedom-ds/styles";
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    globalStyles();
  }, []);
  return (
    <header style={{ fontFamily: "Work Sans", fontWeight: 100 }}>
      Hello World ! 🌏
    </header>
  );
}
