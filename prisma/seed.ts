import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    id: '60491443-09ae-4fc4-b44d-33858c31652e',
    name: 'John Doe',
    email: 'John@hotmail.com',
    cpf: '12345678910',
    phone: '119999999999',
    created_at: new Date('2023/03/28'),
  },
  {
    id: '60491443-09ae-4fc4-b44d-33858c31652f',
    name: 'Aline',
    email: 'aline@hotmail.com',
    cpf: '12345678912',
    phone: '119999999998',
    created_at: new Date('2023/02/13'),
  },
  {
    id: '60491443-09ae-4fc4-b44d-33858c31652q',
    name: 'Vitor',
    email: 'vitor@hotmail.com',
    cpf: '12345678970',
    phone: '119999999997',
    created_at: new Date('2023/01/28'),
  },
  {
    id: '60491443-09ae-4fc4-b44d-33858c31652q',
    name: 'Adson',
    email: 'Adson@hotmail.com',
    cpf: '12345678978',
    phone: '119999999987',
    created_at: new Date('2022/10/28'),
  },
  {
    id: '60491443-09ae-4fc4-b44d-33858c31652i',
    name: 'Jeferson',
    email: 'Jeferson@hotmail.com',
    cpf: '12345678970',
    phone: '119999999997',
    created_at: new Date('2023/10/28'),
  },
  {
    id: '50123459-56af-4cd6-b25d-23847c30651j',
    name: 'Gabriel',
    email: 'gabriel@gmail.com',
    cpf: '98765432109',
    phone: '119888888888',
    created_at: new Date('2021/02/15'),
  },
  {
    id: '70234567-67bc-4ef5-a36f-23956d31652k',
    name: 'Maria',
    email: 'maria@yahoo.com',
    cpf: '23456789012',
    phone: '118888888888',
    created_at: new Date('2020/03/10'),
  },
  {
    id: '80345678-78cd-4fg6-b47g-44067e31652l',
    name: 'Lucas',
    email: 'lucas@outlook.com',
    cpf: '34567890123',
    phone: '117777777777',
    created_at: new Date('2020/04/20'),
  },
  {
    id: '90456789-89de-5gh7-c58i-64178f31652m',
    name: 'Mariana',
    email: 'mariana@gmail.com',
    cpf: '45678901234',
    phone: '116666666666',
    created_at: new Date('2019/05/05'),
  },
  {
    id: '10567890-90ef-6ij8-d69j-74289g31652n',
    name: 'Gustavo',
    email: 'gustavo@hotmail.com',
    cpf: '56789012345',
    phone: '115555555555',
    created_at: new Date('2019/06/25'),
  },
  {
    id: '20678901-01fg-7kl9-e7y0-84390h31652o',
    name: 'Bianca',
    email: 'bianca@outlook.com',
    cpf: '67890123456',
    phone: '114444444444',
    created_at: new Date('2018/07/02'),
  },
  {
    id: '30789012-12gh-8mn0-f8u1-94501i31652p',
    name: 'Rafael',
    email: 'rafael@yahoo.com',
    cpf: '78901234567',
    phone: '113333333333',
    created_at: new Date('2020/08/12'),
  },
  {
    id: '40890123-23ij-9op1-g9v2-04612j31652q',
    name: 'Julia',
    email: 'julia@gmail.com',
    cpf: '89012345678',
    phone: '112222222222',
    created_at: new Date('2021/09/01'),
  },
  {
    id: '50901234-34kl-0qr2-h0w3-15723k31652r',
    name: 'Leonardo',
    email: 'leonardo@hotmail.com',
    cpf: '90123456789',
    phone: '111111111111',
    created_at: new Date('2021/10/23'),
  },
];

async function main() {
  await prisma.forms_answers.deleteMany({});
  users.forEach(async (user) => {
    await prisma.forms_answers.create({
      data: {
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        phone: user.phone,
        created_at: user.created_at,
      },
    });
  });
  const getUsers = await prisma.forms_answers.findMany({});
  console.log(getUsers);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
