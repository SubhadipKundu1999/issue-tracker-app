import { NextRequest, NextResponse } from "next/server";
import Prisma from '../../../prisma/client'

export async function GET(request:NextRequest) {
    const users = await Prisma.user.findMany();
    return NextResponse.json(users);
    
}