import React, { Component } from "react";
import "./App.css";
import PoseWrapper from "./components/poseWrapper";
import StyledWebcamFeed from "./components/webcamFeed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <StyledWebcamFeed />
          <PoseWrapper />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
