export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
}

export interface IUserEvaluate extends IUser {
  count?: number;
}
