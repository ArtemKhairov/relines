import { FC } from "react";
import { IUser } from "@/shared/api";
import { Button, List, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

interface IProps {
  user: IUser;
  actionOne: Callback<IUser>;
  actionTwo: Callback<IUser>;
  rate?: number;
}

interface Callback<T> {
  (data: T): void;
}

const ListCard: FC<IProps> = ({ user, actionOne, actionTwo, rate }) => {
  const { first_name } = user;
  return (
    <List.Item key={user.id} style={{ justifyContent: "flex-start" }}>
      <Typography style={{ marginRight: "10px" }}>{first_name}</Typography>
      {rate && <Typography style={{ marginRight: "10px" }}>{rate}</Typography>}
      <Button
        style={{ marginRight: "10px" }}
        onClick={() => actionOne(user)}
        icon={<PlusOutlined />}
      />
      <Button onClick={() => actionTwo(user)} icon={<MinusOutlined />} />
    </List.Item>
  );
};

export { ListCard };
