import { FC } from "react";
import { IUser } from "@/shared/api";
import { Button, List, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

interface IProps {
  user: IUser;
}

const ListCard: FC<IProps> = ({ user }) => {
  const { first_name } = user;
  return (
    <List.Item style={{ justifyContent: "flex-start" }}>
      <Typography>{first_name}</Typography>
      <Button icon={<PlusOutlined />} />
      <Button icon={<MinusOutlined />} />
    </List.Item>
  );
};

export { ListCard };
