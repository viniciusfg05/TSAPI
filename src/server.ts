import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.post("/curso", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(8080, () => console.log("Server is running"));
