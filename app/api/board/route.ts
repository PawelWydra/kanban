import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const body = await request.json();
  const id = body.id;
  await prisma.board.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json("Board deleted successfully!", { status: 200 });
}
