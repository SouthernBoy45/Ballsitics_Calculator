import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import ImageList from "../../components/ImageList/ImageList";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [shotData, setShotData] = useState([]);

  useEffect(() => {
    getAllShotData();
  }, []);

  const getAllShotData = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/ShotData", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setShotData(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      {console.log(user)}
      <h1>Home Page for {user.userName}!</h1>
      {shotData &&
        shotData.map((shotData) => (
          <p key={shotData.id}>
            <li>Target Range - {shotData.targetRange} </li>
            <li>Shooting Condition - {shotData.shootingCondition}</li>
            <li>Notes - {shotData.note}</li>
          </p>
        ))}
        <ImageList shotData={shotData}/>
    </div>
  );
};

export default HomePage;
