import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "shubham swami",
    email: "sswami@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Navnath Ugade",
    email: "nugade@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default user;
