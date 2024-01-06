import React, { useState } from "react";
import Draggable from "react-draggable";
import { ChromePicker } from "react-color";

const TextToolsAndEditor = ({ show }) => {
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (e) => setFontSize(e.target.value);
  const handleColorChange = (color) => setTextColor(color.hex);
  const handleTextChange = (e) => setText(e.target.value);

  return show ? (
    <div>
      <Draggable>
        <div
          style={{
            position: "absolute",
            cursor: "move",
            top: "25%",
            left: "50%",
            zIndex: 1,
          }}
        >
          <input
            type="text"
            value={text}
            style={{
              fontSize: `${fontSize}px`,
              color: textColor,
              background: "transparent",
              border: "none",
            }}
            placeholder="Type here!"
            onChange={handleTextChange}
          />
        </div>
      </Draggable>
      <div
        style={{
          position: "absolute",
          cursor: "move",
          top: "25%",
          left: "10%",
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: "12px" }}>
          <label>
            Font Size: {fontSize}px
            <input
              type="range"
              min="10"
              max="50"
              value={fontSize}
              onChange={handleFontSizeChange}
            />
          </label>
        </div>
        <div style={{ textAlign: "left" }}>
          <label>
            Text Color:
            <ChromePicker
              color={textColor}
              onChangeComplete={handleColorChange}
            />
          </label>
        </div>
      </div>
    </div>
  ) : (
    <Draggable>
      <div
        style={{
          fontSize: `${fontSize}px`,
          color: textColor,
          position: "absolute",
          cursor: "move",
          top: "25%",
          left: "50%",
          zIndex: 1,
        }}
      >
        {text}
      </div>
    </Draggable>
  );
};

export default TextToolsAndEditor;
