import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize('sqlite::memory:d');

export default sequelizeConnection;
