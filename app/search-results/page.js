"use server"

import SubjectCard from "@/components/component/subject-card"
import incrementClick from "@/lib/increment-views"
import { getSearchResults } from "@/lib/actions"
import { Card } from "@/components/ui/card"
async function page({ searchParams }) {
    const query = searchParams.query
    const searchResults = await getSearchResults(query)
    return (
        <div >
            {(searchResults.length > 0) ?
                <div>
                    <div className="text-xl mb-10">
                        Total results for <span className=" font-bold">{query}</span> : {searchResults.length}
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {searchResults.map((questionPaper) => (
                            <Card key={questionPaper.id} className="w-full max-w-sm p-6 grid gap-6 relative">
                                <SubjectCard questionPaper={questionPaper} incrementClick={incrementClick} />
                            </Card>
                        ))}
                    </div>
                </div>
                : <div className="text-center">No Results Found</div>
            }

        </div>
    )
}

export default page
