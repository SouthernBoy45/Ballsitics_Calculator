import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ImageForm from "../../components/ImageForm/ImageForm";

const PostShotPage = ({}) => {
  const [user, token] = useAuth();
  const [shotData, setShotData] = useState({
    targetRange: 0,
    shootingCondition: "",
    note: "",
  });

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
            <button type="submit">Record</button>
        </form>
        <label>Got a picture?</label>
            <ImageForm/>
      </div>
    );
};

export default PostShotPage;
