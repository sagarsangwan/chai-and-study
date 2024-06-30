
import prisma from '@/lib/prisma'
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';


async function getcurrentCourse(id) {
    let currentCourse
    try {
        currentCourse = await prisma.Course.findUnique({
            where: { id: id },
            include: {
                Stream: true,
            },
        });
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
    return (currentCourse)
}
export async function generateMetadata({ params }) {
    const courseId = params.id;

    const currentCourse = await getcurrentCourse(courseId)


    return {
        title: currentCourse.name + " - MDU Previous Years Question Papers Download | last-night-paper.com",
        description: currentCourse.description,
    };
}

async function page({ params }) {
    const courseId = params.id

    const currentCourse = await getcurrentCourse(courseId)
    return (
        <div className="mb-96">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {currentCourse ?
                    currentCourse.Stream.map((course) => (

                        <Card key={course.id}
                            className="relative overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                            <Link href={`/subjects/${course.id}`} className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View subject</span>
                            </Link>
                            <div className="p-6 bg-background">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">

                                        <h3 className="text-xl font-semibold">{course.name}</h3>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </div>
                                </div>
                                <p className="mt-2 text-muted-foreground">
                                    {course.description}
                                </p>
                            </div>
                        </Card>
                    )) :
                    <div>no courses</div>
                }</div>



        </div>
    )
}

export default page
