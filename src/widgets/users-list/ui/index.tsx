import { observer } from "mobx-react-lite";
import { userSessionModel } from "@/features/user-session";

const UsersList = observer(() => {
  const { users } = userSessionModel.useUserListStore();
  console.log(users,"Users Component");
  return <div>1</div>;
});

export { UsersList };
