import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main() {
    await prisma.post.create({
        data: {
            title: "post1",
            published: false,
            author: {
                connect: {
                    id: 4
                }
            }
        }
    })
}
main().then(async () => {
    console.log("done")
    await prisma.$disconnect()
}).catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1);
})