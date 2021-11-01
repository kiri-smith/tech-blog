const { User } = require('../models');

const userData = [
    {
        email: 'red@colorsoftherainbow.com',
        password: 'bleed red',
    },
    {
        email: 'orange@colorsoftherainbow.com',
        password: 'bleed orange',
    },
    {
        email: 'yellow@colorsoftherainbow.com',
        password: 'bleed yellow',
    },
    {
        email: 'green@colorsoftherainbow.com',
        password: 'bleed green',
    },
    {
        email: 'blue@colorsoftherainbow.com',
        password: 'bleed blue',
    },
    {
        email: 'indigo@colorsoftherainbow.com',
        password: 'bleed indigo',
    },
    {
        email: 'violet@colorsoftherainbow.com',
        password: 'bleed violet',
    },
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;