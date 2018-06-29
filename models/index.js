import Sequelize from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    },
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

  },
);

const db = {
  User: sequelize.import('./user'),
};

// Object.keys(db).forEach((modelName) => {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;

export default db;
