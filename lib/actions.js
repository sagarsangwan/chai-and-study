import prisma from "./prisma";

export async function getAllSubjectName() {
    'use server'
    try {
        const allSubjects = await prisma.Subject.findMany({
            select: { name: true, id: true },
            orderBy: [

                {
                    name: 'asc',
                },
            ]
        })
        return allSubjects;
    } catch (error) {
        return error
    } finally {
        await prisma.$disconnect()
    }
}
export async function getAllCourseName() {
    'use server'
    try {
        const allCourses = await prisma.Course.findMany({
            orderBy: [

                {
                    name: 'asc',
                },
            ],
            select: { name: true, id: true }
        })

        return allCourses;
    } catch (error) {
        return error
    } finally {
        await prisma.$disconnect()

    }
}