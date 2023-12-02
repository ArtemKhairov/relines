import { userSessionModel } from "@/features/user-session";

export const UsersPage = () => {
  return (
    <userSessionModel.UserSessionProvider>
      <div>div</div>
    </userSessionModel.UserSessionProvider>
  );
};
