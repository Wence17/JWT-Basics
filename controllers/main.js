const { BadRequest } = require("../errors");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password) {
    throw new BadRequest("Please provide email and password");
  }

//   const token = jwt.sign(
//       { foo: "bar" }, // payload
//       privateKey, // privateket
//       { algorithm: "RS256" }, //option
//       function (err, token) {
//           console.log(token);
//         }, //callback function
//         { expiresIn: 60 * 60 }, //  or { exp: Math.floor(Date.now() / 1000) + (60 * 60), data: "foobar" },
//   );

// just for demo, normally provided by the database
const id = new Date().getDate();

// Just for demo, in actualt production use a longer, complex and not easy to guess string value for the privateKey!!!!!!!!
const token = jwt.sign({id, username}, process.env.JWT_SECRET, { expiresIn: '1h' })
// const token = jwt.sign({id, username}, process.env.JWT_SECRET, {},()=>{})

  res.status(200).json({msg:'user created!', token});
};

const dashboard = async (req, res) => {
    const user = req.user
    console.log(user)
    luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).send({
      msg: `Hello, ${user.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};

module.exports = {
  login,
  dashboard,
};
