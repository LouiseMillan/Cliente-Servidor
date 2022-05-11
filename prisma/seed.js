const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main(){
    try{
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node"
            }
        });
        
        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node"
            }
        });
        
        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa2" },
            update: {},
            create: {
                name: "Woopa2",
                username: "ajolonauta2",
                mission: "Java"
            }
        });
        
        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa3" },
            update: {},
            create: {
                name: "Woopa3",
                username: "ajolonauta3",
                mission: "Node"
            }
        });

        
        const woopa4 = await prisma.explorer.upsert({
            where: { name: "Woopa4" },
            update: {},
            create: {
                name: "Woopa4",
                username: "ajolonauta4",
                mission: "Node"
            }
        });
        
        const woopa5 = await prisma.explorer.upsert({
            where: { name: "Woopa5" },
            update: {},
            create: {
                name: "Woopa5",
                username: "ajolonauta5",
                mission: "Java"
            }
        });
        
        const woopa6 = await prisma.explorer.upsert({
            where: { name: "Woopa6" },
            update: {},
            create: {
                name: "Woopa6",
                username: "ajolonauta6",
                mission: "Java"
            }
        });

        const woopa7 = await prisma.explorer.upsert({
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