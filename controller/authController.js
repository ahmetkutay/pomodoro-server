const login = (req, res) => {
  return "login";
};

const register = (req, res) => {
  return "register";
};

const verifyRegistration = (req, res) => {
  return "register-verification";
};

module.exports = { login, register, verifyRegistration };