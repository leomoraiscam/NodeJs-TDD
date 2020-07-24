import "../../src/database/index";
import User from "../../src/app/models/User";

const models = [User];

module.exports = () => {
  return Promise.all(
    models.map((key) => {
      return key.destroy({ truncate: true, force: true });
    })
  );
};
