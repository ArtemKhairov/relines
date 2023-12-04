import { makeAutoObservable } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { IUser, userApi } from "@/shared/api";
import { ILocalStore } from "@/shared/lib/hooks";

class UserStore implements ILocalStore {
  private _state: "rejected" | "pending" | "fulfilled" = "fulfilled";
  private _users: IPromiseBasedObservable<IUser[]> | null = null;
  private _usersFormated: IUser[] | [] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true, deep: false });
    this.init();
  }

  get state() {
    return this._state;
  }

  get users() {
    return this._users;
  }

  get usersFormated() {
    return this._usersFormated;
  }

  setUsersFormated(users: IUser[]) {
    this._usersFormated = users;
  }

  public async load() {
    const users = fromPromise(userApi.getUserList());
    this._users = users;
    users.then((result) => this.setUsersFormated(result));
  }

  public loadMore() {
    const users = fromPromise(userApi.getUserList());
    this._users = users;
    users.then((result) => {
      this.setUsersFormated(result.concat(this._usersFormated));
    });
  }

  public init() {
    this.load();
  }

  destroy(): void {}
}
export { UserStore };
