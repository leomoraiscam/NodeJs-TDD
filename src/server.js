import app from "./app";

app.listen(process.env.APP_PORT, () => {
  console.log(`server is running in port ${process.env.APP_PORT}`);
});
