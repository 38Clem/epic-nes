import React from "react"
import { Component } from "react";

export default class AudioPlayer extends Component {

  music = new Audio("./../assets/sounds/adventure-begins.ogg")
 
  

  render = () => {

    return (
      <audio
      controls
      onPlay={() => this.music.play}
      onError={e => console.log(e)}
    />

    )
  }
}

 




