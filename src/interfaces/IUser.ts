export interface IUserInfo {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

export interface IUser extends IUserInfo {
  id: string;
}
