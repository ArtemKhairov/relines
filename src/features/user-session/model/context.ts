import { createContext } from "react";

import { UserPageStore } from "./store";

export const UserStoreContext = createContext<null | UserPageStore>(null);
