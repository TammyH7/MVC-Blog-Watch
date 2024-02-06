const { User } = require('../models');

const userData =
[
  {
    "username": "janedoe07",
    "email": "janedoe07@gmail.com",
    "password": "admin12345"
  },
  {
    "username": "kelly-taylor",
    "email": "kelly_kelly@hotmail.com",
    "password": "password90210"
  },
  {
    "username": "saul-goodman",
    "email": "jimmy@gmail.com",
    "password": "saulBCS1234"
  },
  {
    "username": "roxy257",
    "email": "roxy257@yahoo.com",
    "password": "password12345"
  },
  {
    "username": "techrat1987",
    "email": "tech_rat0@gmail.com",
    "password": "techgod1106"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;