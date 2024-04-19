import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { IColumn } from "@/types";

export async function GET() {
  const boards = await prisma.board.findMany({
    include: {
      columns: {
        include: {
          tasks: true,
        },
      },
    },
  });
  return NextResponse.json(boards, { status: 200 });
}

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

  // Fetch the current board with its columns
  const currentBoard = await prisma.board.findUnique({
    where: { id: id },
    include: { columns: true },
  });

  if (!currentBoard) {
    throw new Error("Board not found");
  }

  // Identify the columns that need to be deleted, created, and updated
  const columnsToDelete = currentBoard.columns.filter(
    (column) =>
      !columns.some((newColumn: IColumn) => newColumn.id === column.id)
  );
  const columnsToCreate = columns.filter(
    (newColumn: IColumn) =>
      !currentBoard.columns.some((column) => newColumn.id === column.id)
  );
  const columnsToUpdate = columns.filter((newColumn: IColumn) =>
    currentBoard.columns.some((column) => newColumn.id === column.id)
  );

  // Perform the delete, create, and update operations
  await prisma.board.update({
    where: { id: id },
    data: {
      name: name,
      columns: {
        deleteMany: columnsToDelete.map((column) => ({ id: column.id })),
        create: columnsToCreate.map((column: IColumn) => ({
          name: column.name,
        })),
        update: columnsToUpdate.map((column: IColumn) => ({
          where: { id: column.id },
          data: { name: column.name },
        })),
      },
    },
  });

  // Fetch the updated board with its columns
  const updatedBoard = await prisma.board.findUnique({
    where: { id: id },
    include: {
      columns: {
        include: {
          tasks: true,
        },
      },
    },
  });

  return NextResponse.json(updatedBoard, { status: 200 });
}
export async function POST(request: Request) {
  const body = await request.json();
  const { name, columns } = body;
  const board = await prisma.board.create({
    data: {
      name: name,
      columns: {
        create: columns.map((column: IColumn) => ({
          name: column.name,
        })),
      },
    },
    include: {
      columns: {
        include: {
          tasks: true,
        },
      },
    },
  });
  return NextResponse.json(
    { message: "Board added successfully", board },
    { status: 201 }
  );
}
