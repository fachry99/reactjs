import { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Goodbye!",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me part2</button> */}
        {/* this is the most common way to bind event handlers in the render method */}
        {/* <button onClick={() => this.clickHandler()}>Click Me part2</button> */}
        {/* this is the second most common way to bind event handlers in the render method */}
        <button onClick={this.clickHandler}>Click Me part3</button>
      </div>
    );
  }
}

export default EventBind;
