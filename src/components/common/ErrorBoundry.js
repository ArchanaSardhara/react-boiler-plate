import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error.toString() };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorInfo: error.toString(),
    });
  }

  render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="vh-100 vw-100">
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <div className="mb-2 text-center">
              <h1>Something went wrong!</h1>
              <p className="text-muted text-wrap">{errorInfo}</p>
              <Button
                color="primary"
                className="mt-4"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload this page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: null,
};

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};
export default ErrorBoundary;
