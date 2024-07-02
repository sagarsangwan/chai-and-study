import { getAllCourseName, getAllSubjectName } from "@/lib/actions"
import UploadQuestionForm from "./uoload-form"
async function page() {
    // const allCourses = await getAllCourseName()
    const allSubjects = await getAllSubjectName()
    return (
        <div>
            <UploadQuestionForm allSubjects={allSubjects} />

        </div>
    )
}

export default page
