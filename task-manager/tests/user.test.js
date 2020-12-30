const request = require('supertest')
const app = require('../src/app')



test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Phyllis',
        email: 'myemailfive@goo.com',
        password: 'hello11223'
    }).expect(201)

})