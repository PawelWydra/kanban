import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const body = await request.json();
  const id = body.id;
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json("Task deleted successfully!", { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      subtasks: body.subtasks,
      status: body.status,
      columnId: body.columnId,
    },
  });
  return NextResponse.json("Task created successfully!", { status: 200 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  await prisma.task.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      description: body.description,
      subtasks: body.subtasks,
      status: body.status,
      columnId: body.columnId,
    },
  });
  return NextResponse.json("Task updated successfully!", { status: 200 });
}
