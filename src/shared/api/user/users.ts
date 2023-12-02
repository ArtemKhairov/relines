import { IUser } from "./model";
import { apiInstance } from "../base";

const BASE_URL = "/users/random_user";

export const getUserList = (): Promise<IUser[]> => {
  return apiInstance.get(BASE_URL, {
    params: {
      size: 8,
    },
  });
};
