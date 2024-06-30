
import prisma from '@/lib/prisma'
import { Card } from '@/components/ui/card';
import NextLink from 'next/link';
import { ChevronRightIcon } from 'lucide-react';



async function getcurentStream(id) {
    let curentStream
    try {
        curentStream = await prisma.Stream.findUnique({
            where: { id: id },
            include: {
                Subject: true,
            },
        });
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
    return (curentStream)
}


export async function generateMetadata({ params }) {
    const subjectId = params.id;
    const curentStream = await getcurentStream(subjectId)


    return {
        title: curentStream.name + " - MDU Previous Years Question Papers Download | chai-and-study.com",
        description: curentStream.description,
    };
}

async function page({ params }) {
    const subjectId = params.id

    const currentStream = await getcurentStream(subjectId)
    return (
        <div className="mb-96">
            <div className="  justify-center text-center grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {currentStream ?
                    currentStream.Subject.map((subject) => (

                        <Card key={subject.id}
                            className="relative overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                            <NextLink href={`/question-paper/${subject.id}`} className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View subject</span>
                            </NextLink>
                            <div className="p-6 bg-background">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">

                                        <h3 className="text-xl font-semibold">{subject.name}</h3>
                                    </div>

                                </div>
                                <p className="mt-2 text-muted-foreground">
                                    {subject.description}
                                </p>
                                <p className="text-sm pt-2 text-center text-white ">{subject.year}</p>
                            </div>

                        </Card>
                    )) :
                    <div>no subjects</div>
                }</div>



        </div>
    )
}

export default page
