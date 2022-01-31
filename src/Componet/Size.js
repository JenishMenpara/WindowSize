import React from "react";
import "../App.css"

export default function Size({ useWindowSize }) {
  
    const [height, width] = useWindowSize();

  return (
    <>
    <div>height: {height}px, width: {width}px</div>
      
    </>
  );
}
