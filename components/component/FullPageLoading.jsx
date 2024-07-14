import React from 'react'
import { Loader } from 'lucide-react'
function FullPageLoading({ heightOfComponenet }) {
    return (
        <div className={`flex justify-center items-center min-h-[${heightOfComponenet}]  mx-auto`}>
            <Loader className='animate-ping' />
        </div>
    )
}

export default FullPageLoading
