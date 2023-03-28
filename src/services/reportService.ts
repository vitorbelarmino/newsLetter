import prisma from '../../prisma';
import { Idate } from '../interfaces/IDate';

const reportService = async (data: Idate) => {
  const report = await prisma.forms_answers.findMany({
    where: {
      created_at: {
        gte: new Date(data.initialDate),
        lte: new Date(data.finalDate),
      },
    },
  });
  return report;
};
export { reportService };
