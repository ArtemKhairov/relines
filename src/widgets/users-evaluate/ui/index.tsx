import { userSessionModel } from "@/features/user-session";
import { IUser } from "@/shared/api";
import { ListCard } from "@/shared/ui/list-card";
import { Empty, List } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";
import { useCallback } from "react";

const MemoItem = React.memo(ListCard);

const UsersEvaluate = observer(() => {
  const { usersToEvaluate, removeFormated } = userSessionModel.useUserListStore();

  const handleRemove = useCallback((data: IUser) => {
    removeFormated(data,"-");
  }, []);

  const handleAdd = useCallback((data: IUser) => {
    removeFormated(data,"+");
  }, []);

  if (!usersToEvaluate) {
    return (
      <>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </>
    );
  }

  return (
    <List
      bordered
      dataSource={usersToEvaluate}
      renderItem={(item) => (
        <MemoItem
          rate={item.count}
          user={item as IUser}
          actionTwo={handleRemove}
          actionOne={handleAdd}
        />
      )}
    />
  );
});

export { UsersEvaluate };
