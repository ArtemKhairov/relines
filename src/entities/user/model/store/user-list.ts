import { makeAutoObservable, toJS } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { IUser, IUserEvaluate, userApi } from "@/shared/api";
import { ILocalStore } from "@/shared/lib/hooks";

class UserStore implements ILocalStore {
  private _state: "rejected" | "pending" | "fulfilled" = "fulfilled";
  private _users: IPromiseBasedObservable<IUser[]> | null = null;
  private _usersFormated: IUser[] = [];
  private _usersToEvaluate: IUserEvaluate[] = [];
  private _modal: boolean = false;
  private _banUser: IUserEvaluate | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true, deep: true });
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

  get usersToEvaluate() {
    return this._usersToEvaluate;
  }

  get modal() {
    return this._modal;
  }

  get banUser() {
    return this._banUser;
  }

  setBanUser(user: IUserEvaluate) {
    this._banUser = user;
  }

  setModal(open: boolean) {
    this._modal = open;
  }

  setUsersFormated(users: IUser[]) {
    this._usersFormated = users;
  }

  setFormated(user: IUser, symbol: string) {
    const tmpUsers = toJS(
      this._usersFormated.filter((u: IUser) => {
        return u.id !== user.id;
      })
    );
    const _user: IUserEvaluate = {
      ...user,
      count: symbol === "+" ? 1 : -1,
    };
    this.setUsersToEvaluate(this.usersToEvaluate.concat(_user));
    this.setUsersFormated(tmpUsers);
  }

  removeFormated(user: IUserEvaluate, symbol: string) {
    const index = this.usersToEvaluate.findIndex((item: IUserEvaluate) => {
      return item === user;
    });
    const tmpUsers = [...this.usersToEvaluate];
    if (tmpUsers[index].count === 5 || tmpUsers[index].count === -5) {
      return false;
    } else {
      const value = symbol === "+" ? 1 : -1;
      tmpUsers[index].count = tmpUsers[index].count! + value;
      if (tmpUsers[index].count === 5 || tmpUsers[index].count == -5) {
        this.setBanUser(tmpUsers[index]);
        this.setModal(true);
      }
      this.setUsersToEvaluate(tmpUsers);
    }
  }

  refreshUser(user: IUserEvaluate) {
    const tmpUsers = toJS(
      this.usersToEvaluate.filter((u: IUser) => {
        console.log(u, user);
        return u.id !== user.id;
      })
    );

    const _user: IUserEvaluate = { ...user };
    delete _user["count"];
    const tmpFormated = [...this.usersFormated, user];
    this.setUsersFormated(tmpFormated);
    this.setUsersToEvaluate(tmpUsers);
    this.setModal(false);
  }

  setUsersToEvaluate(users: IUserEvaluate[]) {
    this._usersToEvaluate = users;
  }

  public async load() {
    const users = fromPromise(userApi.getUserList());
    this._users = users;
    users.then((result) => {
      // localStorage.setItem("usersFormated", JSON.stringify(result));
      // localStorage.setItem("users", JSON.stringify(users));
      this.setUsersFormated(result);
    });
  }

  public loadMore() {
    const users = fromPromise(userApi.getUserList());
    this._users = users;
    users.then((result) => {
      this.setUsersFormated(result.concat(toJS(this._usersFormated)));
    });
  }

  public init() {
    this.load();
    // const usersFormated = localStorage.usersFormated
    //   ? JSON.parse(localStorage?.usersFormated)
    //   : false;
    // const users = localStorage.users ? JSON.parse(localStorage?.users) : false;
    // console.log(users);
    // if (!users || !usersFormated) {
    //   this.load();
    // } else {
    //   this._usersFormated = users;
    //   this._users = users;
    // }
  }

  destroy(): void {}
}
export { UserStore };
