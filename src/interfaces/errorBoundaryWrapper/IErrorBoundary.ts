export default interface IErrorBoundary {
  redirect: boolean;
  hasError: boolean;
  error: {
    message: string;
    stack: string;
  };
  info: {
    componentStack: string;
  };
}
