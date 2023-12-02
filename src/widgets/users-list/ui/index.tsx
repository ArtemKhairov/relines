import { observer } from "mobx-react-lite";
import { userSessionModel } from "@/features/user-session";
//
import { Button, List, Skeleton, Typography } from "antd";
import { FC } from "react";

interface IProps {
  action: () => void;
}

const ListHeader: FC<IProps> = ({ action }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography style={{ marginRight: "15px" }}>Пользователи</Typography>
      <Button onClick={action}>Обновить</Button>
    </div>
  );
};

const UsersList = observer(() => {
  const { users, load } = userSessionModel.useUserListStore();

  if (users.length <= 0) {
    return <Skeleton />;
  }

  return (
    <List
      header={<ListHeader action={load} />}
      bordered
      dataSource={users}
      renderItem={(item) => (
        <List.Item>
          <Typography>{item.first_name}</Typography>
        </List.Item>
      )}
    />
  );
});

export { UsersList };
