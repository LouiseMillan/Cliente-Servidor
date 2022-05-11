const express = require("express");
const { PrismaClient } = require("@prisma/client");
const req = require("express/lib/request");

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "alive"});
});

app.get("/explorers", async (request, response) => {
    const allExplorers = await prisma.explorer.findMany({});
    response.json(allExplorers);
});

app.get("/explorers/:id", async (request, response) => {
    const id = request.params.id;
    const explorer = await prisma.explorer.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    response.json(explorer);
});

app.post("/explorers", async (request, response) => {
    const explorer = {
        name: request.body.name, 
        username: request.body.username,
        mission: request.body.mission
    };

    await prisma.explorer.create({data: explorer});
    return response.json({message: "Explorer creado."});
});

app.put("/explorers/:id", async (request, response) => {
    const id = parseInt(request.params.id);

    await prisma.explorer.update({
        where:{
            id: id
        },
        data: {
            mission: request.body.mission
        }
    });

    return response.json({message: "Actualizado correctamente."});
});

app.delete("/explorers/:id", async (request, response) => {
    const id = parseInt(request.params.id);

    await prisma.explorer.delete({
        where: {
            id: id
        }
    });

    return response.json({message: "Eliminado correctamente."});
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});