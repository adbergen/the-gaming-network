const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;
const http = require("http").Server(app);
const socket = require("socket.io");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Start the API server
server = app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

io = socket(server);

io.on("connection", (socket) => {
  console.log("It's connected", socket.id);

  socket.on("SEND_MESSAGE", function (data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});
