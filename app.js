const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute.js");
const financeRouter = require("./routes/financeRoute");
const carsRouter = require("./routes/carsRoute");
const authenticate = require("./auth");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const getIndexPage = (req, res) => {
  res.sendFile(path.join(__dirname, "./public/views", "index.html"));
};

const getSignupPage = (req, res) => {
  res.sendFile(path.join(__dirname, "./public/views", "loginPage.html"));
};

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "./public/views", "homePage.html"));
};

const getFinancePage = (req, res) => {
  res.sendFile(path.join(__dirname, "./public/views", "financePage.html"));
};

app.get("/", getIndexPage);
app.get("/signup", getSignupPage);
app.get("/home", authenticate, getHomePage);
app.get("/finance", authenticate, getFinancePage);
app.use("/users", userRouter);
app.use("/finance", financeRouter);
app.use("/cars", carsRouter);

app.listen(PORT, () => {
  console.log(`CarGrail listening on port ${PORT}`);
});
