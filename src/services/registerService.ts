import prisma from '../../prisma';
import CustomError from '../helpers/CustomError';
import { IUserInfo } from '../interfaces/IUser';

const registerService = async (userInfo: IUserInfo) => {
  const user = await prisma.forms_answers.findFirst({
    where: {
      email: userInfo.email,
    },
  });
  if (user) { throw new CustomError(400, 'Email já cadratrado'); }
  const newUser = prisma.forms_answers.create({ data: userInfo });
  return newUser;
};

export { registerService };
