import express from "express";

const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.send("server running OK");
});

app.listen(port, () => {
  console.log(`server started at https://localhost:${port}`);
});