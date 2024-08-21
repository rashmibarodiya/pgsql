import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main(){
await prisma.user.create({
    data :{
        email : "me@gmail.com",
        name : "me"
    }
})
}
main().then(async()=>{
    console.log("done")
    await prisma.$disconnect()
}).catch(async(err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1);
})