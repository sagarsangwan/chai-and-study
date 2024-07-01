"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import SelectWithAddOption from "@/components/ui/SelectWithAddOption";

const formSchema = z.object({
    selectedValues: z.array(z.string()).min(1, {
        message: "Please select at least one value.",
    }),
});
export default function ProfileForm({ allCourses }) {
    const form = useForm({
        resolver: zodResolver(formSchema),



    })

    const onSubmit = (data) => {
        console.log(data); // Handle form submission logic here
    };

    return (
        <Form {...form} className="space-y-8">
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <SelectWithAddOption
                                    options={allCourses}
                                    onChange={(selectedOption) => field.onChange(selectedOption ? selectedOption.label : '')}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            {/* <FormMessage>{errors.username?.message}</FormMessage> */}
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}

