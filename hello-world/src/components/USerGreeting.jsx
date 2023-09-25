import { Component } from "react";

class USerGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    //* Short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Fachry</div>;
    //* Ternary Conditional Operator
    // return this.state.isLoggedIn ? "Welcome Fachry" : "Welcome Guest";
    //* Element Variables
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Fachry</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    //* If/Else
    // return (
    //   <div>
    //     <div>Welcome Fachry</div>
    //     <div>USerGreeting</div>;
    //   </div>
    // );
  }
}

export default USerGreeting;
