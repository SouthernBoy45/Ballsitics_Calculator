import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const PostShotPage = ({}) => {
  const [user, token] = useAuth();
  const [shotData, setShotData] = useState({
    targetRange: 0,
    shootingCondition: "",
    note: "",
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShotData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(
        "https://localhost:5001/api/ShotData",
        {
          targetRange: shotData.targetRange,
          shootingCondition: shotData.shootingCondition,
          note: shotData.note,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        if (image) {
          handleImage()
        }
        alert("Shot Information Recorded!!");
        setShotData({ targetRange: 0, shootingCondition: "", note: "" });
      } else {
        alert("Failed to record shot information");
      }
    } catch (error) {
      alert("Error recoring shot information");
      console.log(error.response);
    }
  };
  const handleImage = async () => {
    const formData = new FormData();

    formData.append("shotData", shotData);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image_url", image);
    try {
      const response = await axios.post(
        "https://localhost:5001/api/Images", shotData.id,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
      <h1>Record Your Shot</h1>
      <form onSubmit={handleSubmit}>
        <label>What was your target's range?</label>
        <input
          type="number"
          name="targetRange"
          value={shotData.targetRange}
          step="any"
          min="1"
          max="999999"
          onChange={handleInputChange}
        />
        <label>What were your shooting conditions?</label>
        <textarea
          value={shotData.shootingCondition}
          name="shootingCondition"
          rows="2"
          onChange={handleInputChange}
        />
        <label>Any additional notes?</label>
        <textarea
          value={shotData.note}
          name="note"
          rows="4"
          onChange={handleInputChange}
        />
        <label>Got a picture?</label>
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
        <button type="submit">Record!</button>
      </form>
    </div>
  );
};

export default PostShotPage;
