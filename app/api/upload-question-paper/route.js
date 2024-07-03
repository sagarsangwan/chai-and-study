"use server";
import { NextResponse } from "next/server";
import { findExistingFile, uploadToGooglDrive } from "./upload-to-drive";
export async function POST(req, res) {
    const formData = await req.formData();
    const file = formData.get("questionPaper");
    let uploadedFileLink
    let driveResponse
    try {
        driveResponse = await uploadToGooglDrive(file)
        uploadedFileLink = driveResponse.viewLink
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error uploading file", status: 500 })
    }
    console.log('link=========', link)





    return NextResponse.json(driveResponse);

    return NextResponse.json({ message: "Class submitted successfully", status: 200 })
}
