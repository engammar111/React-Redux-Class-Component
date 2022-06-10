import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    seasonDetermination: "lets hit the beach",
    iconDetermination: "sun",
  },
  winter: {
    seasonDetermination: "its cold",
    iconDetermination: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());

  const { seasonDetermination, iconDetermination } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconDetermination} icon`} />
      <h1 className="text"> {seasonDetermination}</h1>
      <i className={`icon-right massive ${iconDetermination} icon`} />
    </div>
  );
};

export default SeasonDisplay;
