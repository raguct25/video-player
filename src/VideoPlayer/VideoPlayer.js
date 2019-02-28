import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MediaPicker from "react-native-mediapicker";
import VideoComponent from "../Components/VideoComponent";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { videoSource: null };
  }

  playVideo = images => {
    console.warn("data...", images[0]);
    this.setState({ videoSource: images[0] });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.videoSource === null ? (
          <MediaPicker
            callback={images => this.playVideo(images)}
            groupTypes={"All"}
            assetType={"Videos"}
            imagesPerRow={3}
            imageMargin={10}
          />
        ) : (
          <VideoComponent source={this.state.videoSource} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

export default VideoPlayer;
