"use server"
import prisma from "./prisma";
export default async function incrementClick(id) {
    "use server"
    try {
        await prisma.QuestionPaper.update({
            where: { id: id },
            data: {
                views: {
                    increment: 1,
                },
            },
        });
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
}