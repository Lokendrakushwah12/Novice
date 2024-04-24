"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema } from '@/lib/validator';
import * as z from 'zod';
import { resourceDefaultValues } from '@/constants';

type ResourceFormProps = {
    userId: string;
    type: "Create" | "Update";
}

const ResourceForm = ({ userId, type }: ResourceFormProps) => {
    const initialValues = resourceDefaultValues;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input placeholder="Resource title" {...field}
                                        className='input-field'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
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
