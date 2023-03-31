import { PrismaClient } from '@prisma/client';

const prismaTest = new PrismaClient({
  datasources: {
    db: {
      url: 'mysql://root:123456@localhost:3307/news_letter',
    },
  },
});
export default prismaTest;
