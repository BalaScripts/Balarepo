import { useState } from "react";

function BackgroundColorChange() {
  const [change, setChange] = useState(false);
  const [color, setColor] = useState("red");

  return (
    <>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100px",
          height: "40px",
          borderRadius: "30px",
          margin: "5px",
          fontSize: "7px",
          textAlign:"center",
        }}
        onClick={() => {
          setChange(!change);
          setColor(color === "red" ? "blue" : "red");
        }}
      >
        {change ? <h1>Blue</h1> : <h1>Red</h1>}
      </button>
      <div style={{ backgroundColor: color, width: "100%", height: "100vh" }}>
        {change ? <h1>Blue</h1> : <h1>Red</h1>}
      </div>
    </>
  );
}

export default BackgroundColorChange;
