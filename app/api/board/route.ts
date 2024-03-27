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

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, name, columns } = body;
  await prisma.board.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      columns: {
        set: columns,
      },
    },
  });
  return NextResponse.json("Board updated successfully!", { status: 200 });
}
