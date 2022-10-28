const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoute.js");
// const financeRouter = require('./routes/financeRoute');
// const carsRouter = require('./routes/carsRoute');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
// app.use('/finance', userRouter);
// app.use('/cars', userRouter);
// app.get('/users/:id', usersControllers.getUser);
app.listen(PORT, () => {
  console.log("we the best");
});
