
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
async function main() {
   await prisma.user.create({
        data: {
            email: "myemail",
            name: "noname",
            posts: {
                create: [
                    {
                        title: "post along with user"
                    },
                    {
                        title: "post along with user"
                    }
                ]
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