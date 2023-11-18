import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

export default function ImageList() {
  const [user, token] = useAuth();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://localhost:5001/api/Images", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(response.data);

      setImages(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {images.map((image) => (
        <div>
          <img src={image.imageSrc} alt={image.title} width="250" />
          <div>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
