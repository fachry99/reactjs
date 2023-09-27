import { Component } from "react";

class USer extends Component {
  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default USer;
