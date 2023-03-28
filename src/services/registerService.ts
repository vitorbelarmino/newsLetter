import prisma from '../../prisma';
import { IUserInfo } from '../interfaces/IUser';

const registerService = async (userInfo: IUserInfo) => {
  const newUser = prisma.forms_answers.create({ data: userInfo });
  return newUser;
};

export { registerService };
