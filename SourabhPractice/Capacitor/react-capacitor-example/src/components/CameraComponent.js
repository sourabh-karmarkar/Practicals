import React, { Component } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

export default class CameraComponent extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    console.log("imageUrl ---> ", imageUrl);
  }

  render() {
    return (
      <button onClick={this.takePicture}> Take Picture</button>
    );
  }
}