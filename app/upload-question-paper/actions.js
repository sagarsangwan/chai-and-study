"use server"

import prisma from "@/lib/prisma"


export async function AddNewQuestionPaper(formData) {
    const questionPaper = formData.get("questionPaper");
    const subject = formData.get("subject");
    const name = formData.get("name");
    const email = formData.get("email");
    console.log(email, name, subject, questionPaper)
}