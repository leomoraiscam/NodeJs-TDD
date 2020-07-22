const app = require("./app");

app.listen(process.env.PORT || process.env.APP_PORT, () => {
  console.log("Server is running in port 3333");
});
