import { Component } from "react";

class RegularComponents extends Component {
  render() {
    console.log("Regular Component Render");
    return <div>RegularComponents {this.props.name}</div>;
  }
}

export default RegularComponents;
