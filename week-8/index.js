const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const PORT = process.env.PORT; // Use 3000 as a dfault port if process.env.PORT is not defined

app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
main();
