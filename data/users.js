var bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "h@h.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "a User",
    email: "a@h.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "b User",
    email: "b@h.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = users;
