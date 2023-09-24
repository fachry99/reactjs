import { Component } from "react";

class ClassClik extends Component {
  clickHandler() {
    console.log("Clicked the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me part2</button>
      </div>
    );
  }
}
export default ClassClik;
// Compare this snippet from hello-world/src/components/ClassClik.jsx:
