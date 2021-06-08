const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log("Got Ping");
  response.sendStatus(200);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
and then in bot.js include this line:
const server = require('./server.js');