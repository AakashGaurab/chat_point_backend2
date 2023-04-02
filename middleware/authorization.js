const authorise = (passedRole) => {
  return (req, res, next) => {
    const user_role = req.user.role;
    if (passedRole.includes(user_role)) {
      next();
    } else {
      res.send("unauthorized");
    }
  };
};

module.exports = { authorise };
