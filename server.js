const express = require("express");
const { PrismaClient } = require("@prisma/client");

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


app.get("/missions", async (request, response) => {
    const allMissions = await prisma.mission.findMany({});
    response.json(allMissions);
});

app.get("/missions/:id", async (request, response) => {
    const id = request.params.id;
    const mission = await prisma.mission.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    response.json(mission);
});

app.post("/missions", async (request, response) => {
    const mission = {
        name: request.body.name, 
        lang: request.body.lang,
        missionCommander: request.body.missionCommander,
        enrollments: parseInt(request.body.enrollments)
    };

    await prisma.mission.create({data: mission});
    return response.json({message: "Mission creada."});
});

app.put("/missions/:id", async (request, response) => {
    const id = parseInt(request.params.id);

    await prisma.mission.update({
        where:{
            id: id
        },
        data: {
            lang: request.body.lang
        }
    });

    return response.json({message: "Actualizado correctamente."});
});

app.delete("/missions/:id", async (request, response) => {
    const id = parseInt(request.params.id);

    await prisma.mission.delete({
        where: {
            id: id
        }
    });

    return response.json({message: "Eliminado correctamente."});
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});