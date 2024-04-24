import React from 'react'
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
    title: z.string().min(2,
        { message: 'Title should be atleast 2 characters long' }
    ).max(100,
        { message: 'Title should not exceed 100 characters' }
    ),
});

type ResourceFormProps = {
    userId: string;
    type: "Create" | "Update";
}

const ResourceForm = ({ userId, type }: ResourceFormProps) => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
//     return (
//         <>
//             <form className='bg-white border shadow-sm shadow-[#0000001a] rounded-lg p-2 sm:p-4'>
//                 <div className='mb-4'>
//                     <label className='block text-[#282c32d9] text-sm font-[500] mb-2' htmlFor='title'>
//                         Title
//                     </label>
//                     <input
//                         className='shadow-sm shadow-[#0000001a] appearance-none border rounded-lg w-full py-2 px-3 text-[#282c32d9] leading-tight focus:outline-none'
//                         id='title'
//                         type='text'
//                         placeholder='Title'
//                     />
//                 </div>
//                 <div className='mb-4'>
//                     <label className='block text-[#282c32d9] text-sm font-[500] mb-2' htmlFor='description'>
//                         Description
//                     </label>
//                     <textarea
//                         className='shadow-sm shadow-[#0000001a] appearance-none border rounded-lg w-full py-2 px-3 text-[#282c32d9] leading-tight focus:outline-none'
//                         id='description'
//                         placeholder='Description'
//                     />
//                 </div>
//                 <div className='flex items-center justify-between'>
//                     <Button className='font-[400] gap-2 px-4 text-md flex items-center justify-center cursor-pointer rounded-lg transition-all'>
//                         Create
//                     </Button>
//                 </div>
//             </form>
//         </>
//     )
// }

export default ResourceForm
