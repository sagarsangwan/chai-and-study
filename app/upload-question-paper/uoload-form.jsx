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
import { AddNewQuestionPaper } from "./actions"
import UploadToDrive from "../api/upload-question-paper/upload-to-drive"

const MAX_UPLOAD_SIZE = 3 * 1024 * 1024
const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/x-pdf', 'application/acrobat', 'applications/vnd.pdf', 'text/pdf', 'text/x-pdf']
const FormSchema = z.object({

    subject: z.string()
        .min(1, {
            message: "Select a subject",
        }),
    userName: z.string().min(3, {
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
    // add a year and the year should be in between 2020 and 2024 and should be a number and should be required
    year: z.string().nonempty({
        message: "Year is required",
    }).min(4, {
        message: "Year should be 4 digits",
    }).refine((year) => {
        if (parseInt(year) < 2020 || parseInt(year) > 2024) return false
        return true
    }, {
        message: "Year should be between 2020 and 2024",
    })





})
export default function UploadQuestionForm({ allSubjects }) {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            userName: "sagar",
            email: "i@g.com",
            subject: "Analysis & Design of Algorithms",
            questionPaper: undefined,
            year: "2022"
        },
    })

    const OnSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("questionPaper", data.questionPaper[0]);
            // const response = await fetch('http://localhost:5000/upload', {
            const response = await fetch('/api/upload-question-paper', {

                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload file');
            }

            const result = await response.json();
            console.log('File uploaded successfully:', result);
            // Handle result, e.g., update UI with view link
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error, e.g., show error message to user
        }
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
                    name="userName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                                <Input id="userName" {...field} />
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

                                        <SelectItem key={subject.id} value={subject.id}>{subject.name}</SelectItem>
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
                <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Year of paper</FormLabel>
                            <FormControl>
                                {/* <FloatingLabelInput id="year" {...field} label="year" /> */}
                                <Input id="year" {...field} />
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
