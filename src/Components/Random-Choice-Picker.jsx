import "./Random-Choice-Picker.css";
import React, { useState } from "react";
export default function RandomChoicePicker() {
  const [Choices, setChoices] = useState("");
  const HandleText = (e) => {
    setChoices(e.target.value);
  };
  const HandleKey = (e) => {
    if (e.key === "Enter") {
      e.target.value = "";
    }
  };
  const HandleClick = (id) => {
    let newChoice = Choices.split(",").splice(id, 1);

    let res = Choices.split(",").filter((item) => item != newChoice);
    setChoices(res.toString());
  };
  return (
    <>
      <div className="container">
        <h3>
          Enter all the Choices Divided by comma(',').
          <br />
          Please Click Enter When Your Done
        </h3>
        <textarea
          onKeyUp={(e) => {
            HandleKey(e);
          }}
          onChange={(e) => {
            HandleText(e);
          }}
          id="textarea"
          placeholder="Enter Choices..."
        ></textarea>
        <div id="tags">
          {Choices.split(",")
            .filter((tag) => tag.trim() !== "")
            .map((tag) => tag.trim())
            .map((item, id) => {
              return (
                <span className="tag">
                  {item}
                  <span
                    className="Wrongbtn"
                    onClick={() => {
                      HandleClick(id);
                    }}
                  >
                    ❌
                  </span>
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
}
