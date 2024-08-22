
import { PrismaClient } from "@prisma/client";

const prisma =   new PrismaClient()

// async function main() {
//     await prisma.user.update({
//         where : {
//             id : 3
//         },data : {
//             name : "changed name"
//         }
//     })
//     const user  =  await prisma.user.findMany({
//         where : {
//             id : 3
//         }
//     })
//     console.log(user)
// }

// main()
//   .then(async () => {
//     console.log("done");
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })


async function main() {
    await prisma.post.update({
        where : {
            id : 4
        },data : {
            published :true
        }
    })
    const post  =  await prisma.post.findMany({
        where : {
            id : 4
        }
    })
    console.log(post)
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