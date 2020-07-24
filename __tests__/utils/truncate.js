import "../../src/database/index";
import User from "../../src/app/models/User";

module.exports = () => {
  return User.destroy({ truncate: true, force: true });
};
