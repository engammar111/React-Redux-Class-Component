import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner.js";
import Clock from "./exercise";
import "./index.css";

class App extends React.Component {
  state = { latitude: null, longitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <>Error : {this.state.errorMessage}</>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <>
          <SeasonDisplay latitude={this.state.latitude} />
        </>
      );
    }
    return (
      <Spinner message="Kindly Allow the Location to determine your season" />
    );
  }

  render() {
    return <div className="red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
