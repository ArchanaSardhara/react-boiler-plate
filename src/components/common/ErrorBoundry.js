import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
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
        <div
          className="error-boundry-container text-text-primary
            d-flex justify-content-center align-items-center"
        >
          <div className="text-center">
            <div className="mb-2">
              <h1>
                <FontAwesomeIcon
                  size="md"
                  className="mr-2"
                  icon={faExclamationTriangle}
                />
                Something went wrong!
              </h1>
              <p className="text-muted text-wrap">{errorInfo}</p>
              <Button
                className="btn btn-primary mt-4"
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
