import React, { Component } from "react";
import Video from "react-native-video";
import { View, Button } from "react-native";

class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { mute: false };
  }

  mute = () => {
    this.setState({ mute: true });
  };

  unmute = () => {
    this.setState({ mute: false });
  };

  render() {
    const { mute } = this.state;
    return (
      <View>
        <Video
          source={{ uri: this.props.source }}
          style={{ width: 350, height: 200 }}
          muted={mute}
          controls={true}
          resizeMode="contain"
        />
        {mute === false ? (
          <Button onPress={this.mute} title="mute" />
        ) : (
          <Button onPress={this.unmute} title="unmute" />
        )}
      </View>
    );
  }
}

export default VideoComponent;
