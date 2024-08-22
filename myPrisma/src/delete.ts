
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const del = await prisma.user.update({
        where: {
            id: 3
        },
        data: {
posts  : {
    deleteMany : {
        published : true
    }
}
        }
    })
    const user = await prisma.user.findMany({
        where: {
            id: 3
        },
        include : {
            posts : true
        }
    })
    console.log(del)
    console.log(user)
}

main()
    .then(async () => {
        console.log("done");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })



async function wholedelete() {
    const del = await prisma.user.delete({
        where: {
            id: 3
        }
        
    })
    const user = await prisma.user.findMany({
        where: {
            id: 3
        },
        include : {
            posts : true
        }
    })
    console.log(del)
    console.log(user)
}

wholedelete()
    .then(async () => {
        console.log("done");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })