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
  filter,
}) => {
  const getFilter = (filter) => {
    switch (filter) {
      case "light-sepia":
        return "sepia(100%)";
      case "dark-grayscale":
        return "grayscale(100%)";
      case "dark-blur":
        return "blur(3px)";
      default:
        return "none";
    }
  };

  const applyFilterAndDownload = async () => {
    const editedImage = document.querySelector(".edited-image img");

    const newImage = new Image();
    newImage.crossOrigin = "anonymous"; // Enable cross-origin access if needed
    newImage.onload = async () => {
      // Create a canvas and draw the filtered image onto it
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = newImage.width;
      canvas.height = newImage.height;

      // Apply the filter-based filter to the image
      const filteredStyle = getFilter(filter);
      ctx.filter = filteredStyle;
      ctx.drawImage(newImage, 0, 0);

      // Get the resulting image as a data URL and download it
      const dataURL = canvas.toDataURL("image/png");
      downloadjs(dataURL, "filterd_image.png", "image/png");
    };

    // Set the source of the new image to the original image source
    newImage.src = editedImage.src;
  };

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
      <TbSunHigh
        size={20}
        onClick={() => {
          setTheme("light-theme");
          setFilter();
          setBorder();
        }}
      />
      <TbMoonFilled
        size={20}
        onClick={() => {
          setTheme("dark-theme");
          setFilter();
          setBorder();
        }}
      />
      <TbBorderSides
        size={20}
        onClick={() => {
          setBorder((prev) => !prev);
          setTheme();
          setFilter();
        }}
      />
      <TbColorFilter
        size={20}
        onClick={() => {
          setFilter("dark-grayscale");
          setTheme();
          setBorder();
        }}
      />
      <TbBlur
        size={20}
        onClick={() => {
          setFilter("dark-blur");
          setTheme();
          setBorder();
        }}
      />
      <TbColorPicker
        size={20}
        onClick={() => {
          setFilter("light-sepia");
          setTheme();
          setBorder();
        }}
      />
      <TbBan
        size={20}
        onClick={() => {
          setFilter();
          setTheme();
          setBorder();
        }}
      />
      <TbDownload
        size={20}
        onClick={() => (filter ? applyFilterAndDownload() : handleDownload())}
      />
    </div>
  );
};

export default ToolsHeader;
