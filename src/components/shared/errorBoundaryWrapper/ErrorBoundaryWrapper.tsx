import React from "react";
import IErrorBoundary from "../../../interfaces/errorBoundaryWrapper/IErrorBoundary";
export default class ErrorBoundary extends React.Component<
  any,
  IErrorBoundary
> {
  state = {
    redirect: false,
    hasError: false,
    error: {
      message: "",
      stack: "",
    },
    info: {
      componentStack: "",
    },
  } as IErrorBoundary;

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    <div>error</div>;
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return this.props.childrens;
  }
}
