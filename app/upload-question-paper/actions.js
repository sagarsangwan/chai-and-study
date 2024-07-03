"use server"

import prisma from "@/lib/prisma"
import UploadToDrive from "../api/upload-question-paper/upload-to-drive";

export async function AddNewQuestionPaper(data) {
    // const questionPaper = formData.get("questionPaper");
    console.log(data, '=========================================================');
    // const fileLink = await UploadToDrive(questionpaperpdf);
    // console.log(fileLink);

    // try {
    //     // Check if the user already exists
    //     let existingUser = await prisma.Uploader.findUnique({
    //         where: { email: email },
    //     });

    //     // If the user doesn't exist, create a new one
    //     if (!existingUser) {
    //         existingUser = await prisma.Uploader.create({
    //             data: {
    //                 name: name,
    //                 email: email,
    //             },
    //         });
    //     }

    //     // Create the new question paper entry
    //     const newQuestionPaper = await prisma.QuestionPaper.create({
    //         data: {
    //             year: year,
    //             link: "",
    //             published: false,
    //             Subject: {
    //                 connect: [{ id: subject }],
    //             },
    //             uploaderId: existingUser.id,
    //             uploadedBy: "user",
    //         },
    //     });

    //     return newQuestionPaper;
    // } catch (error) {
    //     console.error("Error adding new question paper:", error);
    //     return { error: "Error adding new question paper" };
    // } finally {
    //     await prisma.$disconnect();
    // }
}
