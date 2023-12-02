import { FC, ReactElement } from "react";

interface IProps {
  clearState: () => void;
}

const Fall: FC<IProps> = (): ReactElement => (
  <>
    <div>Something went wrong</div>
  </>
);

export { Fall };
