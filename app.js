const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute.js");
const financeRouter = require("./routes/financeRoute");
const carsRouter = require("./routes/carsRoute");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3001;
// const url = "http://localhost:3001/";
// fetch(url).then((response) => response.json()).then( data => console.log(data))

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use("/users", userRouter);
app.use("/finance", financeRouter);
app.use("/cars", carsRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/html/loginPage.html"));
});
app.listen(PORT, () => {
  console.log(`CarGrail listening on port ${PORT}`);
});
