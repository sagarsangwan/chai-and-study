"use server"

import SubjectCard from "./subject-card"
import incrementClick from "@/lib/increment-views"
async function SearchResults({ searchResults }) {
    return (
        <div>
            <p>sagarrrrrrrrrrrrrrr</p>
            <SubjectCard questionPaper={searchResults} incrementClick={incrementClick} />
        </div>
    )
}

export default SearchResults
