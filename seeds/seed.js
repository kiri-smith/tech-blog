const commentSeeds = require('./comment-seeds');
const postSeeds = require('./post-seeds');
const userSeeds = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await commentSeeds();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await postSeeds();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await userSeeds();
    console.log('\n----- TAGS SEEDED -----\n');

    process.exit(0);
};

seedAll();