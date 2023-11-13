const { User } = require('../models');

const userData = [
    {
        username: 'userAdmin',
        email: 'admin@test.com',
        password: 'adminpassword123',
    },
    {
        username: 'userNormal',
        email: 'normal@test.com',
        password: 'normalpassword123',
    },
    {
        username: 'JohnDoe',
        email: 'JohnDoe@test.com',
        password: 'JohnDoepassword',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;