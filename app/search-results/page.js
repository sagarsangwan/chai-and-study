"use server"

import SubjectCard from "@/components/component/subject-card"
import incrementClick from "@/lib/increment-views"
import { getSearchResults } from "@/lib/actions"
async function page({ searchParams }) {
    const query = searchParams.query
    console.log(query)
    const searchResults = await getSearchResults(query)
    console.log(searchResults)
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {(searchResults.length > 0) ?
                searchResults.map((questionPaper) => (
                    <SubjectCard key={questionPaper.id} questionPaper={questionPaper} incrementClick={incrementClick} />
                )) : <div className="text-center">No Results Found</div>
            }

        </div>
    )
}

export default page
