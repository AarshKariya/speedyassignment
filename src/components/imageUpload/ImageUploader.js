import React, { useState } from "react";
import ImageEditor from "./ImageEditor";
import styles from "./ImageUploader.module.css";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setSelectedImage({
          file: file,
          imageUrl: reader.result,
        });
      };
    }
  };

  return (
    <div className={styles.imageUploaderContainer}>
      {!selectedImage ? (
        <label htmlFor="file-upload" className={styles.customFileUpload}>
          Choose an Image
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      ) : (
        <ImageEditor selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default ImageUploader;
