import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client"



// This is for GET METHODddd
export async function GET(request:NextRequest)
{
  const user =await prisma.testdep.findMany()
  
    return NextResponse.json(user)}

    //post
    export async function POST(request:NextRequest){
        const body= await request.json()
        const user = await prisma.testdep.create({
            data: {
                tittle:body.tittle,
                description:body.description
            }
        });
       
        return NextResponse.json(user)
    }