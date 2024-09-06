import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import moment from "moment"
import { getallUploader } from "./admin-action"
import Link from "next/link"

async function UploaderPaper() {
    const allUploader = await getallUploader()
    return (
        <div>
            <Table>
                {/* <TableCaption>List of all uploaders.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead >Subject</TableHead>
                        <TableHead>Uploader Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead >description</TableHead>
                        <TableHead >year</TableHead>
                        <TableHead >link</TableHead>
                        <TableHead >published</TableHead>
                        {/* <TableHead>createdAt</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allUploader.map(uploader => (
                        <TableRow key={uploader.id}>
                            <TableCell >{uploader.name}</TableCell>
                            <TableCell>{uploader.Uploader.name}</TableCell>
                            <TableCell>{uploader.Uploader.email}</TableCell>
                            <TableCell >{uploader.description}</TableCell>
                            <TableCell >{uploader.year}</TableCell>
                            <TableCell >
                                <a href={uploader.link}>View here</a>
                            </TableCell>
                            <TableCell >{uploader.published}</TableCell>
                            {/* <TableCell>   {moment(uploader.createdAt.toISOString()).fromNow()}  </TableCell> */}
                        </TableRow>
                    ))}

                </TableBody>
            </Table>

        </div>
    )
}

export default UploaderPaper
