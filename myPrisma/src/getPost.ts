
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
async function main() {
    // const res = await prisma.post.findMany({})
    // console.log(res)
    // console.log("*******************************")

    const post = await prisma.post.findMany({
    //    include : {
    //     author : {
    //         select : {
    //             publis
    //         }
    //     }
    //    }
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