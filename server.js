const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// // Production routing to react app
// if (process.env.NODE_ENV == "production") {
//   // Set static folder
// }
app.use(express.static("client/build"));
app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

app.listen(port, () => {
  console.log("");
});
