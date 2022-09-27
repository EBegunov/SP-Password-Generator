import React, { useEffect } from "react";
import ReactSlider from "react-slider";
import "./Slider.css";

const Slider = ({ value, handleChange, min, max, step }) => {
  useEffect(() => {
    for (let e of document.querySelectorAll(
      'input[type="range"].slider-progress'
    )) {
      e.style.setProperty("--value", e.value);
      e.style.setProperty("--min", e.min == "" ? "0" : e.min);
      e.style.setProperty("--max", e.max == "" ? "100" : e.max);
      e.addEventListener("input", () =>
        e.style.setProperty("--value", e.value)
      );
    }
  });

  return (
    <>
      <input
        className="styled-slider slider-progress"
        type="range"
        defaultValue={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
    </>
  );
};

export default Slider;
