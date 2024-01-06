import React from "react";
import {
  TbTextSize,
  TbDownload,
  TbSunHigh,
  TbMoonFilled,
  TbBorderSides,
  TbColorFilter,
  TbBlur,
  TbBan,
  TbColorPicker,
} from "react-icons/tb";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

const ToolsHeader = ({
  showTextTools,
  setShowTextTools,
  setFilter,
  setBorder,
  setTheme,
}) => {
  const handleDownload = async () => {
    setShowTextTools(false);
    try {
      const editedImageElement = document.querySelector(".edited-image");

      if (!editedImageElement) {
        console.error("Edited image element not found");
        return;
      }

      const canvas = await html2canvas(editedImageElement);
      const dataURL = canvas.toDataURL("image/png");

      if (dataURL) {
        downloadjs(dataURL, "download.png", "image/png");
      } else {
        console.error("Failed to generate Data URL");
      }
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="tools">
      <TbTextSize
        size={20}
        onClick={() => setShowTextTools(!showTextTools)}
        style={{ border: showTextTools ? "2px solid #0b8946" : "none" }}
      />
      <TbSunHigh size={20} onClick={() => setTheme("light-theme")} />
      <TbMoonFilled size={20} onClick={() => setTheme("dark-theme")} />
      <TbBorderSides size={20} onClick={() => setBorder((prev) => !prev)} />
      <TbColorFilter size={20} onClick={() => setFilter("dark-grayscale")} />
      <TbBlur size={20} onClick={() => setFilter("dark-blur")} />
      <TbColorPicker size={20} onClick={() => setFilter("light-sepia")} />
      <TbBan
        size={20}
        onClick={() => {
          setFilter();
          setTheme();
          setBorder();
        }}
      />
      <TbDownload size={20} onClick={() => handleDownload()} />
    </div>
  );
};

export default ToolsHeader;
