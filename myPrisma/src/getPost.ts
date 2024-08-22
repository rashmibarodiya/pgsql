
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({log: ['info', 'query']})
async function main() {
    // const res = await prisma.post.findMany({})
    // console.log(res)
    // console.log("*******************************")

    const post = await prisma.post.findMany({
        where : {
            authorId : 1
        },
        include: {
            author: {
                select: {
                    email : true,
                    name :true
                }
            }
        }
    })
    console.log(post)

    //console.log(post[0].title)
}


main().then(async () => {
    console.log("done")
    await prisma.$disconnect()
}).catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1);
})