import { observer } from "mobx-react-lite";
import { userSessionModel } from "@/features/user-session";
//
import { List, Skeleton, Empty } from "antd";
import { ListHeader } from "@/shared/ui/list-header";
import { ListCard } from "@/shared/ui/list-card";
import React from "react";

const MemoItem = React.memo(ListCard);

const UsersList = observer(() => {
  const { users, usersFormated, load, loadMore } =
    userSessionModel.useUserListStore();

  if (!users) {
    return (
      <>
        <ListHeader action={load} nextAction={loadMore} />
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </>
    );
  }

  if (users?.state === "pending") {
    return <Skeleton />;
  }

  return (
    <>
      <ListHeader action={load} nextAction={loadMore} />
      <List
        bordered
        dataSource={usersFormated}
        renderItem={(item) => <MemoItem user={item} />}
      />
    </>
  );
});

export { UsersList };
