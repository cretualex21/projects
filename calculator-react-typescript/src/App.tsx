import React, { useState } from "react";
import Home from "./components/Home";
import "./main.css";

function App() {
  const [value, setValue] = useState<string>("0");

  return (
    <>
      <Home value={value} setValue={setValue} />
    </>
  );
}

export default App;
