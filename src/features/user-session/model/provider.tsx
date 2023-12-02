import type { ReactNode } from "react";

import { hooks } from "@/shared/lib";

import { UserStoreContext } from "./context";
import { UserPageStore } from "./store";

type Props = {
  children?: ReactNode;
};

const UserSessionProvider = ({ children }: Props) => {
  const store = hooks.useLocalStore(() => new UserPageStore());
  return (
    <UserStoreContext.Provider value={store}>
      {children}
    </UserStoreContext.Provider>
  );
};

export { UserSessionProvider };
