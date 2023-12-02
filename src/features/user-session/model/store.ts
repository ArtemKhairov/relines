import { UserStore, userModel } from "@/entities/user";
import { ILocalStore } from "@/shared/lib";

class UserPageStore implements ILocalStore {
  public userStore: UserStore;

  constructor() {
    this.userStore = new userModel.store.UserStore();
  }

  public destroy() {
    this.userStore.destroy();
  }
}

export { UserPageStore };
