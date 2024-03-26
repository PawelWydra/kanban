import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const { id } = params;
  const task = await prisma.task.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(task);
}

