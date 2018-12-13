const express = require("express");
const app = express();

const port = 3000;

const middleWare = {
  reqAutentication: (req, res, next) => {
    console.log("private route hit");
    next();
  },
  logger: (req, res, next) => {
    console.log(`Request: ${new Date().toString()} ${req.method} ${req.originalUrl}`);
    next();
  }
};

app.use(middleWare.logger);

// app.use(middleWare.reqAutentication);

app.get("/about", middleWare.reqAutentication, (req, res) => {
  res.send("About us!");
});

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
  console.log(`Express server has started on port ${port} ...`);
});
