import { useContext } from "react";

import { UserStoreContext } from "./context";

const useUserPageStore = () => {
  const store = useContext(UserStoreContext);
  if (!store) {
    throw new Error("User store is missing");
  }

  return store;
};

export const useUserListStore = () => {
  const { userStore } = useUserPageStore();
  return userStore;
};
