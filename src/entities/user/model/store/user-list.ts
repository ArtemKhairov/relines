import { IUser, userApi } from "@/shared/api";
import { makeAutoObservable } from "mobx";
import { ILocalStore } from "@/shared/lib/hooks";

class UserStore implements ILocalStore {
  private _users: IUser[] | [] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true, deep: false });
    this.init();
  }

  get users() {
    return this._users;
  }

  public async load() {
    const users = await userApi.getUserList();
    console.log(users);
    this._users = users;
  }

  public init() {
    this.load();
  }

  destroy(): void {}
}
export { UserStore };
