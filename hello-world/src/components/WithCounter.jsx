import React from "react";
const withCounter = (WrappedComponent, incrementNumber) => {
  class withCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // Pass any other props that are passed to this component
        />
      );
    }
  }
  return withCounter;
};
export default withCounter;
