import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

export default function ImageForm(shotData) {
  
  const [user, token] = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("shotData", shotData);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image_url", image);
    try {
      const response = await axios.post(
        "https://localhost:5001/api/Images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (er) {
      console.log(er.response.data);
    }
  };
  return (
    <div>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Description:</label>
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="file"
        accept="image/jpeg,image/png,image/gif"
        onChange={(e) => setImage(e.target.files[0])}
      />
    </div>
  );
}
