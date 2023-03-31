import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import prismaTest from '../../client';
import { userMock } from './mocks/UserMock';
import { usersMock } from './mocks/dbMock';
import { app } from '../app';
import { IUser } from '../interfaces/IUser';

chai.use(chaiHttp);

describe('Testa rota de Registro', () => {
  before(async () => {
    await prismaTest.$connect();
    usersMock.forEach(async (user) => {
      await prismaTest.forms_answers.create({
        data: {
          name: user.name,
          email: user.email,
          cpf: user.cpf,
          phone: user.phone,
          created_at: user.created_at,
        },
      });
    });
  });

  after(async () => {
    await prismaTest.forms_answers.deleteMany({});
    await prismaTest.$disconnect();
  });

  it('Deve retornar 200', async () => {
  // sinon.stub(prismaTest.forms_answers, 'create').returns(userMock as any);
    const response = await chai.request(app).post('/register').send(userMock);
    console.log(response.body);
    console.log(response.status);
    chai.expect(response.status).to.equal(201);
  });
});
//
