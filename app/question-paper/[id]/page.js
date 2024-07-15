
import prisma from '@/lib/prisma'
import { Card } from '@/components/ui/card';
import incrementClick from '@/lib/increment-views';
import SubjectCard from '@/components/component/subject-card';
async function getcurrentSubject(id) {
    let currentSubject
    try {
        currentSubject = await prisma.Subject.findUnique({
            where: { id: id },
            include: {
                QuestionPaper: true,
            },
        });
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect()
    }
    return (currentSubject)
}
export async function generateMetadata({ params }) {
    const subjectId = params.id;

    const currentSubject = await getcurrentSubject(subjectId)


    return {
        title: currentSubject.name + " - MDU Previous Years Question Papers Download | chai-and-study.com",
        description: currentSubject.description,
    };
}




async function page({ params }) {
    const subjectId = params.id

    const currentSubject = await getcurrentSubject(subjectId)
    return (
        <div className="mb-96">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {currentSubject ?
                    currentSubject.QuestionPaper.map((questionPaper) => (

                        <Card key={questionPaper.id} className="w-full max-w-sm p-6 grid gap-6 relative">
                            <SubjectCard questionPaper={questionPaper} incrementClick={incrementClick} />
                        </Card>
                    )) :
                    <div>no questionPapers</div>
                }</div>



        </div>
    )
}

export default page
