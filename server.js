const express = require("express");
const path = require("path");

// initialisation
const app = express();
// afficher les page html
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "components", "home.html"));
//   res.sendFile(path.join(__dirname, "components", "contact.html"));
// });
// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "components", "contact.html"));
// });
// express static
app.use(express.static("components"));

// creation du serveur
app.listen(5000, (err) => {
  err ? console.log(err) : console.log("seveur is running");
});
