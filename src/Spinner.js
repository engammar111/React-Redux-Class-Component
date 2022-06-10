import React from "react";

const Spinner = (props) => {
  return (
    <div className="Spinner-container">
      <div class="ui active dimmer">
        <div class="ui big text loader">{props.message}</div>
      </div>
    </div>
  );
};
Spinner.defaultProps = {
  message: "Loading",
};

export default Spinner;
