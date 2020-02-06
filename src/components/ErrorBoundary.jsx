import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }
  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Sorry. There was an error loading your program.</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundary;
