import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";

export async function GET() {
  try {
    const users = await prisma.testdep.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = await prisma.testdep.create({
      data: {
        tittle: body.tittle,
        description: body.description,

        
      }
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}