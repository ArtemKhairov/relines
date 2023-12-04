import { observer } from "mobx-react-lite";
import { userSessionModel } from "@/features/user-session";
//
import { List, Skeleton, Empty } from "antd";
import { ListHeader } from "@/shared/ui/list-header";
import { ListCard } from "@/shared/ui/list-card";
import React, { useCallback } from "react";
import { IUser } from "@/shared/api";

const MemoItem = React.memo(ListCard);

const UsersList = observer(() => {
  const { users, usersFormated, load, loadMore, setFormated } =
    userSessionModel.useUserListStore();

  const handleRemove = useCallback((data: IUser) => {
    setFormated(data,"-");
  }, []);

  const handleAdd = useCallback((data: IUser) => {
    setFormated(data, "+");
  }, []);

  if (!usersFormated) {
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
        renderItem={(item) => (
          <MemoItem
            user={item}
            actionTwo={handleRemove}
            actionOne={handleAdd}
          />
        )}
      />
    </>
  );
});

export { UsersList };
