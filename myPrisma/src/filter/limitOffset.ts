
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.findMany({
    take: 3,
    skip :1

})
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


