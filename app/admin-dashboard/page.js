
import { redirect } from 'next/navigation'
import { isLoggedInOrNot } from './admin-action'
import UploaderPaper from './uploader-table'
import AdminNavbar from '@/components/admin/navbar'



async function Page() {
    const isLoggedIn = await isLoggedInOrNot()
    if (!isLoggedIn) {
        return redirect('/login')
    }
    return (
        <div className='container'>
            <AdminNavbar />
            <UploaderPaper />
        </div>
    )
}

export default Page

