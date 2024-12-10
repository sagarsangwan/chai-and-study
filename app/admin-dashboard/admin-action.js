"use server"
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
export async function getAllUploadedPaper() {
    const allUploadedPaper = await prisma.QuestionPaper.findMany({
        where: {
            uploadedBy: {
                not: "admin",
            },
        },
        include: {
            Uploader: true
        }

    })
    console.log(allUploadedPaper)
    return allUploadedPaper
}

// export async function Update

export async function isLoggedInOrNot() {
    const cookieStore = cookies()
    const jwt = cookieStore.get('att');
    const cookieUsername = cookieStore.get("username");
    const cookiePassword = cookieStore.get("password");
    const validJwt = "ffnjenvjfnvjenvjk";
    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMINPASSWORD;
    if (!jwt || !cookiePassword || !cookieUsername) {
        return false
    }
    if (jwt.value === validJwt && cookieUsername.value === validUsername && cookiePassword.value === validPassword) {
        return true;
    }
    return false

}