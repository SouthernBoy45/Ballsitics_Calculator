import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const PostShotPage = () => {
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
        // setShotDataId(response.data.id)
        if (image) {
          handleImage(response.data.id)
        }
        alert("Shot Information Recorded!!");
        setShotData({ targetRange: 0, shootingCondition: "", note: "" });
      } else {
        alert("Failed to record shot information");
      }
    } catch (error) {
      alert("Error recoring shot information");
      console.log(error);
    }
  };
  const handleImage = async (shotDataId) => {
    const formData = new FormData();

    formData.append("ShotDataId", shotDataId);
    formData.append("Title", title);
    formData.append("Description", description);
    formData.append("imageFile", image);
    try {
      const response = await axios.post(
        "https://localhost:5001/api/Images",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201){
        setTitle("")} {setDescription("")} {setImage(null)
      };
      console.log(response.data);
    } catch (er) {
      console.log(er.response.data);
    }
  };
  return (
    <div className="container">
      <h1>Record Your Shot</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h3>What was your target's range?</h3>
        <input
          type="number"
          name="targetRange"
          value={shotData.targetRange}
          step="any"
          min="1"
          max="999999"
          onChange={handleInputChange}
        />
        <h3>What were your shooting conditions?</h3>
        <textarea
          value={shotData.shootingCondition}
          name="shootingCondition"
          rows="2"
          onChange={handleInputChange}
        />
        <h3>Any additional notes?</h3>
        <textarea
          value={shotData.note}
          name="note"
          rows="4"
          onChange={handleInputChange}
        />
        <h2>Got a picture?</h2>
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
        style={{margin: "10px"}}
        type="file"
        accept="image/jpeg,image/png,image/gif"
        onChange={(e) => setImage(e.target.files[0])}
      />
        <button style={{margin: "10px"}} type="submit">Record!</button>
      </form>
    </div>
  );
};

export default PostShotPage;
