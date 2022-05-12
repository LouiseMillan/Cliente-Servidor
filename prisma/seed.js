const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main(){
    try{
        await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node"
            }
        });
        
        await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node"
            }
        });
        
        await prisma.explorer.upsert({
            where: { name: "Woopa2" },
            update: {},
            create: {
                name: "Woopa2",
                username: "ajolonauta2",
                mission: "Java"
            }
        });
        
        await prisma.explorer.upsert({
            where: { name: "Woopa3" },
            update: {},
            create: {
                name: "Woopa3",
                username: "ajolonauta3",
                mission: "Node"
            }
        });

        
        await prisma.explorer.upsert({
            where: { name: "Woopa4" },
            update: {},
            create: {
                name: "Woopa4",
                username: "ajolonauta4",
                mission: "Node"
            }
        });
        
        await prisma.explorer.upsert({
            where: { name: "Woopa5" },
            update: {},
            create: {
                name: "Woopa5",
                username: "ajolonauta5",
                mission: "Java"
            }
        });
        
        await prisma.explorer.upsert({
            where: { name: "Woopa6" },
            update: {},
            create: {
                name: "Woopa6",
                username: "ajolonauta6",
                mission: "Java"
            }
        });

        await prisma.explorer.upsert({
            where: { name: "Woopa7" },
            update: {},
            create: {
                name: "Woopa7",
                username: "ajolonauta7",
                mission: "Node"
            }
        });

        console.log("Create 8 explorers");
    }catch(e){
        console.error(e);
        process.exit(1);
    }finally{
        await prisma.$disconnect();
    }
})();


(async function main(){
    try{
        const mission1 = await prisma.mission.upsert({
            where: { name: "Mission Node" },
            update: {},
            create: {
                name: "Mission Node",
                lang: "JavaScript",
                missionCommander: "Carlo Gilmar",
                enrollments: 3630,
            }
        });
        
        const mission2 = await prisma.mission.upsert({
            where: { name: "Mission Java" },
            update: {},
            create: {
                name: "Mission Java",
                lang: "Java",
                missionCommander: "Fernanda Ochoa",
                enrollments: 3167,
            }
        });

        console.log("Create 2 missions");
    }catch(e){
        console.error(e);
        process.exit(1);
    }finally{
        await prisma.$disconnect();
    }
})();