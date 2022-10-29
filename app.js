const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoute.js");
const financeRouter = require('./routes/financeRoute');
const carsRouter = require('./routes/carsRoute');
const cookieParser = require('cookie-parser')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/finance', financeRouter);
app.use('/cars', carsRouter);



app.listen(PORT, () => {
  console.log(`CarGrail listening on port ${PORT}`);
});
