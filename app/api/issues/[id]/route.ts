import { pathIssueSchema } from "@/app/validation";
import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client"
import { getServerSession } from "next-auth";
import authOptions from "../../../auth/authOptions";


export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }) {

    // check any user is signed in or not
    const session = await getServerSession(authOptions)
    if (!session)
        return NextResponse.json({}, { status: 401 })

    const body = await request.json();
    console.log(body)

    //check validation
    const validation = pathIssueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }

    //destucturing
    const { assignedToUserId, title, description } = body;

    // check any userid present in request body.
    if (assignedToUserId) {

        console.log(assignedToUserId);
        const user = prisma.user.findUnique(
            {
                where: {
                    id: assignedToUserId
                }
            }
        )

        console.log(user);
        if (!user)
            return NextResponse.json(
                { error: 'Invalid User' },
                { status: 400 }
            );
    }
    //check issue is valid or not
    const issue = await prisma.issue.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!issue) {
        return NextResponse.json(
            { error: "Invalid issue" },
            { status: 404 })
    }

    const updateIssue = await prisma.issue.update({
        where: {
            id: issue.id
        },
        data: {
            title,
            description,
            assignedToUserId
        }
    })

    return NextResponse.json(updateIssue, { status: 200 })
}
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)
    if (!session)
        return NextResponse.json({}, { status: 401 })
    const issue = await prisma.issue.findUnique({

        where: {
            id: parseInt(params.id)
        }
    })

    if (!issue) {
        return NextResponse.json({ error: "Invalid issue" }, { status: 404 })
    }

    const deleteIssue = await prisma.issue.delete({
        where: {
            id: issue.id
        }
    })
    return NextResponse.json(deleteIssue, { status: 200 })

}