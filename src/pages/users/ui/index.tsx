import { userSessionModel } from "@/features/user-session";
import { Header } from "@/widgets/header";
import { UsersEvaluate } from "@/widgets/users-evaluate";
import { UsersList } from "@/widgets/users-list";
import { Col, Layout, Row } from "antd";

export const UsersPage = () => {
  return (
    <userSessionModel.UserSessionProvider>
      <Layout>
        <Header />
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <UsersList />
          </Col>
          <Col span={12}>
            <UsersEvaluate />
          </Col>
        </Row>
      </Layout>
    </userSessionModel.UserSessionProvider>
  );
};
