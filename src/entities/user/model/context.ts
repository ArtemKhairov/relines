import { createContext } from "react";

import { UserStore } from "./store";

export const UserStoreContext = createContext<null | UserStore>(null);

export const { Provider: UserProvider } = UserStoreContext;
