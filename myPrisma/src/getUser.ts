
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
async function main() {
    const res = await prisma.user.findMany({})
    console.log(res)
    console.log("*******************************")

    const user = await prisma.user.findMany({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    })
    console.log(user)

    console.log(user[0].posts)
}


async function main1() {
    const users = await prisma.user.findMany({});
    console.log(users);
    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: {
                where :{
                    published : true
                }
            }
        }
    });
    console.log(user);
};


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

  console.log("#####################################################################")
main1().then(async () => {
    console.log("done2")
    await prisma.$disconnect()
}).catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1);
})