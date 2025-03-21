import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Opdater state, så næste render viser fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Fejl fanget i ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oops! Noget gik galt. Prøv at genindlæse siden.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
