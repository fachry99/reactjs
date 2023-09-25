import { PureComponent } from "react";

class PureComponents extends PureComponent {
  render() {
    console.log("Pure Component Render");
    return <div>PureComponents {this.props.name}</div>;
  }
}

export default PureComponents;
