import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const body = await request.json();
  const id = body.id;
  const task = await prisma.task.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json("Task deleted successfully!", { status: 200 });
}
