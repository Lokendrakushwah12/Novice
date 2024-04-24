import ResourceForm from '@/components/shared/ResourceForm'
import { auth } from '@clerk/nextjs';
import React from 'react'

const UpdateResource = () => {
    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;

    return (
        <>
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <h3 className='wrapper text-2xl sm:text-3xl text-[#282C32] font-[500] text-center sm:text-left'>Update Resource</h3>
            </section>
            <div className="wrapper my-8">
                <ResourceForm userId={userId} type="Update" />
            </div>
        </>
    )
}

export default UpdateResource