import React, { Component } from 'react';
import { Plugins } from '@capacitor/core';
const { Device, Modals } = Plugins;
export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.showDeviceInfo = this.showDeviceInfo.bind(this);
  }

  async showDeviceInfo() {
    let info = await Device.getInfo();
    await Modals.alert({
      title: 'Info',
      message: `UUID: ${info.uuid};
            Model: ${info.model}`
    });
  }

  render() {
    return (
      <button onClick={this.showDeviceInfo}> Show Device Info</button>
    );
  }
}