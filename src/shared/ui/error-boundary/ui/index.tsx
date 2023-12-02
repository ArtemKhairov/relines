import { Component, ErrorInfo, ReactNode } from "react";
import { Fall } from "@/shared/ui/fall";

type ErrorState = {
  isError: boolean;
};

interface IProps {
  children: ReactNode;
}

// Catch Errors
class ErrorBoundary extends Component<IProps> {
  state: ErrorState = {
    isError: false,
  };

  static getDerivedStateFromError(): ErrorState {
    return { isError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(`Warning!!! You have some issues... ${error}: ${errorInfo}`);
  }

  clearState = (): void => {
    this.setState({
      isError: false,
    });
  };

  render(): ReactNode {
    return this.state.isError ? (
      <Fall clearState={this.clearState} />
    ) : (
      this.props.children
    );
  }
}

export { ErrorBoundary };
