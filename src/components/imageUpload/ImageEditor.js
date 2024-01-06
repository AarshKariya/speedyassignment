import React, { useState } from "react";
import TextToolsAndEditor from "./TextToolsAndEditor";
import ToolsHeader from "./ToolsHeader";

const ImageEditor = ({ selectedImage }) => {
  const [showTextTools, setShowTextTools] = useState(false);
  const [filter, setFilter] = useState();
  const [theme, setTheme] = useState();
  const [border, setBorder] = useState(false);

  return (
    <div className="editor">
      <ToolsHeader
        showTextTools={showTextTools}
        setShowTextTools={setShowTextTools}
        setFilter={setFilter}
        setBorder={setBorder}
        setTheme={setTheme}
      />
      {selectedImage && (
        <div className="edited-image">
          <TextToolsAndEditor show={showTextTools} />
          <div className={`${filter} ${border ? "border" : ""} ${theme}`}>
            <img
              src={selectedImage?.imageUrl}
              alt="Selected"
              style={{
                position: "relative",
                width: "80%",
                maxHeight: "50%",
                objectFit: "contain",
                margin: "10px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
