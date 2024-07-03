'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { UploadIcon } from "lucide-react"
import Link from "next/link"
import { useTheme } from 'next-themes';
import { Button } from "../ui/button"
import toast from "react-hot-toast"
function HomeFeatures() {
    const { theme } = useTheme();
    function showComingSoonToast() {
        return (
            toast("coming soon")
        )
    }
    return (
        <div id="help-others" className={`grid gap-10 md:px-10 md:grid-cols-3 px-4 py-5 md:py-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-400'
            }`}>
            <Card className=" relative">
                <CardHeader>
                    <div className="flex gap-5">Upload Data   </div>
                </CardHeader>
                <CardContent>
                    <CardDescription >

                        Enhance our collective learning experience by sharing your question papers and study materials. Your contributions can make a significant difference!
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="w-full stretched-link" variant="" href="/upload">
                                <UploadIcon />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            {/* <DialogHeader>
                                <DialogTitle>Share link</DialogTitle>
                                <DialogDescription>
                                    What do you want to upload
                                </DialogDescription>
                            </DialogHeader> */}
                            <div className="flex items-center space-x-2">
                                <div className="grid flex-1 gap-2">
                                    <Link href="/upload-question-paper" >Upload Question Paper</Link>
                                    <br />
                                    <Link href="" onClick={() => { showComingSoonToast() }} >Upload Study Material</Link>
                                </div>

                            </div>
                            {/* <DialogFooter className="sm:justify-start">
                                <DialogClose asChild>
                                    <Button type="button" variant="secondary">
                                        Close
                                    </Button>
                                </DialogClose>
                            </DialogFooter> */}
                        </DialogContent>
                    </Dialog>
                    {/* <Button className="w-full stretched-link" variant="" href="/upload">
                        <UploadIcon />
                    </Button> */}

                </CardFooter>

            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Feature 2</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        luctus, eros at congue dictum, justo erat ultricies nisi, nec
                        ultricies elit sem at metus.
                    </CardDescription>
                </CardContent>

            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Feature 3</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        luctus, eros at congue dictum, justo erat ultricies nisi, nec
                        ultricies elit sem at metus.
                    </CardDescription>
                </CardContent>

            </Card>
        </div>
    )
}

export default HomeFeatures
