import app from "./app";
import { AppDataSource } from "./config/Databaseconfig";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
