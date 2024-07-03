"use server";
import { NextResponse } from "next/server";
import { findExistingFile, uploadToGooglDrive } from "./upload-to-drive";
import prisma from "@/lib/prisma";
export async function POST(req, res) {
    const formData = await req.formData();
    const file = formData.get("questionPaper");
    const subjectName = formData.get("subjectName");
    const subjectId = formData.get("subjectId")
    const email = formData.get("email");
    const userName = formData.get("userName");
    const year = formData.get("year");
    let uploadedFileLink
    let driveResponse
    try {
        driveResponse = await uploadToGooglDrive(file)
        uploadedFileLink = driveResponse.viewLink
    } catch (error) {
        return NextResponse.json({ message: "Error uploading file", status: 500 })
    }

    try {
        let uploader = await prisma.uploader.findUnique({
            where: { email: email },
            include: {
                QuestionPaper: true,
            },
        })
        if (!uploader) {
            uploader = await prisma.uploader.create({
                data: {
                    name: userName,
                    email: email,
                }
            })
        }

        let CurrentQuestionPaper = await prisma.QuestionPaper.findFirst({
            where: {
                AND: [
                    {
                        name: `${subjectName} ${year}`
                    },
                    {
                        year: year
                    }
                ]
            }
        })
        if (!CurrentQuestionPaper) {
            CurrentQuestionPaper = await prisma.QuestionPaper.create({
                data: {
                    name: `${subjectName} ${year}`,
                    description: `question paper of ${subjectName} from ${year}`,
                    uploaderId: uploader.id,
                    year: year,
                    link: uploadedFileLink,
                    uploadedBy: "user",
                    Subject: { "connect": [{ "id": subjectId }] },
                    published: false
                }

            })
            return NextResponse.json({ message: "new question paper uploaded ", data: CurrentQuestionPaper, status: 200 })
        }

        return NextResponse.json({ message: "You have already uploaded this question paper ", data: CurrentQuestionPaper, status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error in creating user ", status: 500 })
    }







    return NextResponse.json(driveResponse);

    return NextResponse.json({ message: "Class submitted successfully", status: 200 })
}
