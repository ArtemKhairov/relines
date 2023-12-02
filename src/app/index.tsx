import { FC, ReactElement } from "react";
import { Router } from "@/pages";
import { ErrorBoundary } from "@/shared/ui/error-boundary";

const App: FC = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export { App };
