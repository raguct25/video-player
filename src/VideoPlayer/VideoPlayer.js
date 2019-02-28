import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import MediaPicker from "react-native-mediapicker";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playVideo = images => {
    console.warn(images[0]);
  };

  render() {
    return (
      <View style={styles.container}>
        <MediaPicker
          callback={images => this.playVideo(images)}
          groupTypes={"All"}
          assetType={"Videos"}
          imagesPerRow={3}
          imageMargin={10}
        />
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
