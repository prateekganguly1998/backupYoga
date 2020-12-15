import React from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

class WebcamFeed extends React.Component {
  render() {
    let videoConstraints={
      mirrored:true
    }
    return (
      <div className={this.props.className}>
        <div ref="video">
          <Webcam videoConstraints={videoConstraints} />
        </div>
      </div>
    );
  }
}

const StyledWebcamFeed = styled(WebcamFeed)`
  display: inline-block;
  width: 75.1%;
  height: 100%;
  transform:scaleX(-1);
  video {
    width: 100%;
    height: 100%;
  }
`;
export default StyledWebcamFeed;
