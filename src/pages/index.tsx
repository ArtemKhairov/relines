import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTE_CONSTANTS } from "@/shared/config/routes";
// Pages
import { Notfound } from "./not-found/NotFound";
import { UsersPage } from "./users";

export const Router: FC = () => (
  <Routes>
    <Route path="*" element={<Notfound />} />
    <Route path={ROUTE_CONSTANTS.HOME} element={<UsersPage />} />
    <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<Notfound />} />
  </Routes>
);
