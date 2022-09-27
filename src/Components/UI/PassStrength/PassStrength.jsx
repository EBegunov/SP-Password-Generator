import React, { useState } from "react";
import "./PassStrength.css";

const PassStrength = ({ props }) => {
  const [counter, setCounter] = useState(0);

  const temp = [
    props.validUpper,
    props.validLower,
    props.validNumbers,
    props.validSymbol,
  ];

  const b = ["EASY", "NORMAL", "MEDIUM", "HARD"];

  const a = temp.reduce((acc, item) => (item ? (acc += 1) : acc), 0);

  return (
    <>
      <div className="passStrength__text">STRENGTH</div>
      <div className="passStrength__value">
        {!!a && <div className="passStrength__value-text">{b[a - 1]}</div>}
        {!!a &&
          temp
            .sort((a, b) => b - a)
            .map((item, index) =>
              item ? (
                <div
                  key={index}
                  className="passStrength__value-img action"
                ></div>
              ) : (
                <div key={index} className="passStrength__value-img"></div>
              )
            )}
      </div>
    </>
  );
};

export default PassStrength;
