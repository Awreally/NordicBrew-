import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const RouteLoading = () => {
  return <div>Loading...</div>;
};

export const RouteErrorBoundary = () => {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : "Something went wrong";

  return <div>{message}</div>;
};