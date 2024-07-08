import React from "react";
import "./GridExample.sass";

const GridExample = () => {
  return (
    <div className='grid-example'>
      <h1>Grid Example</h1>
      <div class='grid-container'>
        <div class='grid-item full-width'>1</div>

        <div class='grid-item'>2</div>
        <div class='grid-item'>3</div>
        <div class='grid-item'>4</div>

        <div class='grid-item'>5</div>
        <div class='grid-item'>6</div>
        <div class='grid-item'>7</div>
      </div>
    </div>
  );
};

export default GridExample;
