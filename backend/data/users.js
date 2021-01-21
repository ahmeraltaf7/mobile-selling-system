import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ali Raza",
    email: "ali@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Maaz Gul",
    email: "maaz@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
