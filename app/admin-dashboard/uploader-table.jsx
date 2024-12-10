import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import moment from "moment"
import { getAllUploadedPaper } from "./admin-action"
import Link from "next/link"
import { Button } from "@/components/ui/button"

async function UploaderPaper() {
    const allUploadedPaper = await getAllUploadedPaper()
    return (
        <div>
            <Table>
                {/* <TableCaption>List of all uploaders.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead >Paper Name</TableHead>
                        <TableHead>Uploader Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead >Description</TableHead>
                        <TableHead >Year</TableHead>
                        <TableHead >Link</TableHead>
                        <TableHead >Published</TableHead>
                        {/* <TableHead>createdAt</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allUploadedPaper.map(questionPaper => (
                        // console.log(questionPaper)
                        <TableRow key={questionPaper.id}>
                            <TableCell >{questionPaper.name}</TableCell>
                            <TableCell>{questionPaper.Uploader.name}</TableCell>
                            <TableCell>{questionPaper.Uploader.email}</TableCell>
                            <TableCell >{questionPaper.description}</TableCell>
                            <TableCell >{questionPaper.year}</TableCell>
                            <TableCell >
                                <Link className="" href={questionPaper.link}>
                                    <Button>
                                        View here
                                    </Button>
                                </Link>
                            </TableCell>
                            <TableCell >{questionPaper.published ? "Published" : "not publishe"}

                            </TableCell>
                            {/* <TableCell>   {moment(uploader.createdAt.toISOString()).fromNow()}  </TableCell> */}
                        </TableRow>
                    ))}

                </TableBody>
            </Table>

        </div>
    )
}

export default UploaderPaper
