import React from "react";

import { Component } from 'react'

export default class UnmountClassComponent extends Component {
  componentDidMount(){
    console.log("Component mounted and eventListner attached")
    window.addEventListener("resize", this.handleResize);
  }
  handleResize = ()=>{
    console.log("handleResize called");
  }
  componentWillUnmount(){
    console.log("Component Will unmount called");
    window.removeEventListener("resize",this.handleResize);
  }
  render() {
    return (
      <div>
        Unmount
      </div>
    )
  }
}
