import { Outlet } from 'react-router-dom'
export default function AuthLayout() {
    return (
        <main className='max-w-4xl m-auto mt-5 md:mt-10 flex flex-col md:flex-row items-center'>
            <img src='../img/logo.svg' alt='logotipo'
            className='max-w-xs'/>
            <div className='p-5 w-full'>
            <Outlet />
            </div>
        </main>
    )
}
