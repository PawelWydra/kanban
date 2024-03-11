import prisma from "@/lib/prisma"

async function main() {
  await prisma.board.createMany({
   data: [{
    name: "Platform Launch"
   },{
    name: "Marketing Plan"
   },{
    name: "Roadmap"
   }]
  });
}
