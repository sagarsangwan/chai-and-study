"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { AddNewQuestionPaper } from "./actions"

const MAX_UPLOAD_SIZE = 3 * 1024 * 1024
const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/x-pdf', 'application/acrobat', 'applications/vnd.pdf', 'text/pdf', 'text/x-pdf']
const FormSchema = z.object({

    subject: z.string()
        .min(1, {
            message: "Select a subject",
        }),
    name: z.string().min(3, {
        message: "Name should be atleast 3 characters",
    }),
    email: z.string().email({
        message: "Enter a valid email",
    }),
    questionPaper: z.any().refine((file) => {
        console.log(file)
        if (file.length < 1) return false
        if (file[0].size > MAX_UPLOAD_SIZE) return false
        if (!ACCEPTED_FILE_TYPES.includes(file[0].type)) return false
        return true
    }, {
        message: "Upload a valid PDF file with size less than 3MB",
    }),





})
export default function UploadQuestionForm({ allSubjects }) {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "sagar",
            email: "i@g.com",
            subject: "Analysis & Design of Algorithms",
            questionPaper: undefined
        },
    })

    const OnSubmit = async (data) => {
        // create a formdata and append the file and subject to it and console formdata values
        const formData = new FormData();
        formData.append("questionPaper", data.questionPaper[0]);
        formData.append("subject", data.subject);
        formData.append("name", data.name);
        formData.append("email", data.email);

        await AddNewQuestionPaper(formData)
    }
    const fileRef = form.register("questionPaper");
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(OnSubmit)} className=" space-y-6">
                <FormDescription>
                    Upload a question paper
                </FormDescription>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input id="name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                {/* <FloatingLabelInput id="email" {...field} label="Email" /> */}
                                <Input id="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select a subject</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select subject" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {allSubjects.map((subject) => (

                                        <SelectItem key={subject.id} value={subject.name}>{subject.name}</SelectItem>
                                    ))}

                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="questionPaper"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Upload PDF </FormLabel>
                            <FormControl>
                                <Input id="questionPaper" type="file" {...fileRef} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
