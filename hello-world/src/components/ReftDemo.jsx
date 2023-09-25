import React, { Component } from "react";

class ReftDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // 1. create a ref
    this.cbRef = null; // 4. create a callback ref
    this.setCbRef = (element) => {
      this.cbRef = element;
    }; // 5. assign the callback ref to the element
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus(); // 6. focus on the element
    }
    // this.inputRef.current.focus(); // 3. focus on the input element
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value); // 2. get the value of the input element
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ReftDemo;
