import { userSessionModel } from "@/features/user-session";
import { IUser } from "@/shared/api";
import { ListCard } from "@/shared/ui/list-card";
import { Empty, List, Modal } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";
import { useCallback, useEffect } from "react";

const MemoItem = React.memo(ListCard);

const UsersEvaluate = observer(() => {
  const {
    usersToEvaluate,
    removeFormated,
    banUser,
    modal,
    setModal,
    refreshUser,
  } = userSessionModel.useUserListStore();

  const handleRemove = useCallback((data: IUser) => {
    removeFormated(data, "-");
  }, []);

  const handleAdd = useCallback((data: IUser) => {
    removeFormated(data, "+");
  }, []);

  useEffect(() => {}, []);

  if (!usersToEvaluate) {
    return (
      <>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </>
    );
  }

  return (
    <>
      {banUser && (
        <Modal
          open={modal}
          title={
            banUser?.count === -5
              ? `Пора забанить ${banUser.username}. Сделать это?`
              : `Нужно вознаградить ${banUser.username}. Сделать это?`
          }
          onCancel={() => setModal(false)}
          onOk={() => refreshUser(banUser)}
        />
      )}
      <List
        bordered
        dataSource={usersToEvaluate}
        renderItem={(item) => (
          <MemoItem
            rate={item.count}
            user={item as IUser}
            actionTwo={handleRemove}
            actionOne={handleAdd}
            removeAction={() => refreshUser(item)}
          />
        )}
      />
    </>
  );
});

export { UsersEvaluate };
