"use client"
import Link from 'next/link'
import { File } from 'lucide-react'
function SubjectCard({ questionPaper, incrementClick }) {
    return (
        <Link
            href={questionPaper.link}
            onClick={() => incrementClick(questionPaper.id)}
            className="card w-full max-w-sm  grid gap-6 relative hover:bg-muted transition-colors"
            prefetch={false}
        >
            <div className="absolute top-4 right-4 bg-muted rounded-full px-3 py-1 text-xs text-muted-foreground">
                {(questionPaper.views > 0) ? questionPaper.views + " views" : "New"}
            </div>
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-16">
                <File className="w-8 h-8 fill-primary" />
            </div>
            <div className="grid gap-1">
                <h3 className="text-lg font-semibold">{questionPaper.name}</h3>
                <p className="text-muted-foreground text-sm">{questionPaper.year}</p>
            </div>
        </Link>
    )
}

export default SubjectCard
