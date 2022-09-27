import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import PassStrength from "../../Components/UI/PassStrength/PassStrength";
import Slider from "../../Components/UI/Slider/Slider";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [newPass, setNewPass] = useState("");
  const [value, setValue] = useState(20);
  const [validUpper, setValidUpper] = useState(false);
  const [validLower, setValidLower] = useState(false);
  const [validNumbers, setValidNumbers] = useState(false);
  const [validSymbol, setValidSymbol] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlerClick = (event) => {
    switch (event.target.id) {
      case "Upper":
        setValidUpper((validUpper) => !validUpper);
        break;
      case "Lower":
        setValidLower((validLower) => !validLower);
        break;
      case "Numbers":
        setValidNumbers((validNumbers) => !validNumbers);
        break;
      case "Symbol":
        setValidSymbol((validSymbol) => !validSymbol);
        break;
    }
  };

  function genNewPassword() {
    if (!validUpper && !validLower && !validNumbers && !validSymbol) {
      return alert("Выберите параметры которые должен содержать пароль");
    }

    const arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr_en = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const arr_EN = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const arr_symb = ["!", "@", "#", "$", "%", "?", "-", "+", "=", "~"];

    const compareRandom = () => Math.random() - 0.5;
    const randomInteger = (min, max) =>
      Math.round(min - 0.5 + Math.random() * (max - min + 1));

    let arr = [];
    if (validNumbers) arr = arr.concat(arr_num);
    if (validLower) arr = arr.concat(arr_en);
    if (validUpper) arr = arr.concat(arr_EN);
    if (validSymbol) arr = arr.concat(arr_symb);

    arr.sort(compareRandom);

    let password = "";
    for (let i = 0; i < value; i++) {
      password += arr[randomInteger(0, arr.length - 1)];
    }

    setNewPass(password);
  }

  return (
    <div className="wrapper">
      <div className="output__box">
        {newPass}
        <IoCopyOutline className="output__img" />
      </div>

      <div className="input__box">
        <div className="character__length">
          <div className="character__length-text">Character Length</div>
          <div className="character__length-value">{value}</div>
        </div>

        <Slider
          value={value}
          handleChange={handleChange}
          min={4}
          max={20}
          step={1}
        />

        <div className="validation__uppercase valid">
          <input
            onClick={handlerClick}
            id="Upper"
            type="checkbox"
            className="uppercase__input valid__input"
          />
          <label htmlFor="Upper" className="uppercase__label valid__label">
            Include Uppercase Letters
          </label>
        </div>
        <div className="validation__lowercase valid">
          <input
            onClick={handlerClick}
            id="Lower"
            type="checkbox"
            className="lowercase__input valid__input"
          />
          <label htmlFor="Lower" className="lowercase__label valid__label">
            Include Lowercase Letters
          </label>
        </div>
        <div className="validation__numbers valid">
          <input
            onClick={handlerClick}
            id="Numbers"
            type="checkbox"
            className="numbers__input valid__input"
          />
          <label htmlFor="Numbers" className="numbers__label valid__label">
            Include Numbers
          </label>
        </div>
        <div className="validation__symbol valid">
          <input
            onClick={handlerClick}
            id="Symbol"
            type="checkbox"
            className="symbol__input valid__input"
          />
          <label htmlFor="Symbol" className="symbol__label valid__label">
            Include Symbols
          </label>
        </div>
        <div className="passStrength__wrapper">
          <PassStrength
            props={{ value, validLower, validUpper, validNumbers, validSymbol }}
          />
        </div>
        <button onClick={genNewPassword} className="btn__generator">
          Generate
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
