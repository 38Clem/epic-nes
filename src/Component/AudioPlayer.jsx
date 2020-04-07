import React from "react"
import { Component } from "react";

export default class AudioPlayer extends Component {

  audio = new Audio("./assets/sounds/adventure-begins.ogg")
 
  render = () => {

    return (
      <audio
      controls
      onPlay={() => this.audio.play()}
      onError={e => console.log(e)}
    />

    )
  }
}

 




