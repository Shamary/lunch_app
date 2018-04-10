//import Sequelize from 'sequelize';
var Sequelize =require("sequelize");
var bcrypt = require('bcrypt');

var db = require('../config/db');


const User = db.define('lunch_admin', {
  user_name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  /*name: {
    type: String,
  },
  level: {
    type: String,
  },
  signature: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  active: {
    type: String,
    allowNull: false,
    defaultValue: false,
  },
  role: {
    type: String,
    values: ['ADMIN', 'SUPERVISOR', 'CREDIT_ADMIN', 'CALL_ADMIN'],
    defaultValue: 'CALL_CENTER',
  },*/
},
{
  timestamps: false,
  tableName: 'user',
});

User.printHash = (password) => {
  const hash = generateHash(password);
  console.log('hash', hash);
};

User.comparePassword = function (plainPassword, hash) {
  return bcrypt.compareSync(plainPassword, hash);
};

const generateHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const encryptPassword = function (user, options) {
  user.password = generateHash(user.password);
};

User.beforeCreate((user, options) => {
  if (user.password) {
    return encryptPassword(user, options);
  }
});

//export default User;
module.exports = User;