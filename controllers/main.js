const login = async (req, res) => {
    const {username,password} = req.body;
    console.log(username,password);
    
    res.send("fake signin/register/signup");
  };
  
  const dashboard = async (req, res) => {
    luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .send({
        msg: `Hello, Emmanuel`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
      });
  };
  
  module.exports = {
    login,
    dashboard,
  };
  