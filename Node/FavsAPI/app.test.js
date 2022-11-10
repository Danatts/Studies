require('dotenv').config();
const supertest = require('supertest');
const mongoose = require('mongoose');
const { app } = require('./app');
const connectDB = require('./config/database');
const user = require('./api/user/user.model');

const request = supertest(app);

describe('User Endpoints', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await user.deleteMany();
    await mongoose.connection.close();
  });

  test('should create a new user', async () => {
    const res = await request
      .post('/api/user/')
      .send({
        name: 'Daniel Test',
        email: 'danieltest@test.com',
        password: 'test123',
      });
    expect(res.statusCode).toEqual(201);
  });

  test('should return an error message: missing values', async () => {
    const res = await request
      .post('/api/user')
      .send({
        email: 'danieltest@test.com',
        password: 'test123',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('some missing values on request body');
  });

  test('should return an error message: weak password', async () => {
    const res = await request
      .post('/api/user')
      .send({
        name: 'test',
        email: 'danieltest@test.com',
        password: '1234',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('password must contain a number and contain at least 6 characters');
  });

  test('should return an error message: missing token', async () => {
    const res = await request
      .get('/api/user')
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('token not provided');
  });
});

describe('Auth Endpoints', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('should return an error message: missing values', async () => {
    const res = await request
      .post('/auth/local/login')
      .send({
        email: 'danieltest@test.com',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('missing values');
  });

  test('should log in user', async () => {
    const res = await request
      .post('/auth/local/login')
      .send({
        email: 'danieltest@test.com',
        password: 'test123',
      });
    expect(res.statusCode).toEqual(200);
  });
});
