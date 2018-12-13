const express = require("express");
const app = express();
const middleWare = require("./middleWare.js");

const port = 3000;

app.use(middleWare.logger);

app.get("/about", middleWare.reqAutentication, (req, res) => {
  res.send("About us!");
});

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
  console.log(`Express server has started on port ${port}!`);
});
