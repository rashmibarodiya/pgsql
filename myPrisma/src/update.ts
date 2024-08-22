
import { PrismaClient } from "@prisma/client";

const prisma =   new PrismaClient()

async function main() {
    await prisma.user.update({
        where : {
            id : 3
        },data : {
            name : "changed name"
        }
    })
    const user  =  await prisma.user.findMany({
        where : {
            id : 3
        }
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