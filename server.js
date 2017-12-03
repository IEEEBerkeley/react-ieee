const express = require('express')
const path = require('path')
const app = express()


app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/testing', (req, res) => {
  console.log('invoked')
  res.send(Math.random().toString());
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))

