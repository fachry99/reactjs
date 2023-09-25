import { Component, PureComponent } from "react";
import RegularComponents from "./RegularComponents";
import PureComponents from "./PureComponents";

class ParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Fachry",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Fachry",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Component Render");
    return (
      <div>
        ParentComponent
        <RegularComponents name={this.state.name} />
        <PureComponents name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
