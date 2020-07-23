require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
module.exports = {
  dialect: process.env.DB_DIALECT || "postgres",
  host: process.env.PG_DATABASE_HOST,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB_NAME,
  storage: "./__tests__/database.sqlite",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
