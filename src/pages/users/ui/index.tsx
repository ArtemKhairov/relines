import { userSessionModel } from "@/features/user-session";
import { Header } from "@/widgets/header";
import { UsersList } from "@/widgets/users-list";
import { Layout } from "antd";

export const UsersPage = () => {
  return (
    <userSessionModel.UserSessionProvider>
      <Layout>
        <Header />
        <UsersList />
      </Layout>
    </userSessionModel.UserSessionProvider>
  );
};
