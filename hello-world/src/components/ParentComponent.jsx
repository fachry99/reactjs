import { Component } from "react";
// import RegularComponents from "./RegularComponents";
// import PureComponents from "./PureComponents";
import MemoComponent from "./MemoComponent";

class ParentComponent extends Component {
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
        <MemoComponent name={this.state.name} />
        {/* <RegularComponents name={this.state.name} />
        <PureComponents name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComponent;
