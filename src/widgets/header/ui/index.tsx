import { Layout, Typography } from "antd";

const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
    <AntdHeader
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Typography style={{ color: "white" }}>Relines</Typography>
    </AntdHeader>
  );
};

export { Header };
