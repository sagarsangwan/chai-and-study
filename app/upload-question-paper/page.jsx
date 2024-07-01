import { getAllCourseName } from "@/lib/actions"
import ProfileForm from "./uoload-form"
async function page() {
    const allCourses = await getAllCourseName()
    return (
        <div>
            {allCourses.map((course) => (
                <div key={course.id}>{course.name}</div>
            ))}
            <ProfileForm allCourses={allCourses} />

        </div>
    )
}

export default page
