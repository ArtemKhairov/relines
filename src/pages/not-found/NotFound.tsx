import { FC, ReactElement } from "react";
import { Result } from "antd";

const Notfound: FC = (): ReactElement => {
  return <Result status="404" title="404" subTitle="Page not found" />;
};

export { Notfound };
