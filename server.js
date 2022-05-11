const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "alive"});
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});