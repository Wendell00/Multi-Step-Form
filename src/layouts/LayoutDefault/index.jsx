import { Outlet } from 'react-router-dom'

export function LayoutDefault() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#cfe2fe]'>
      <main className='w-[960px] h-[580px] bg-[#f0f6ff] rounded-2xl shadow-2xl p-10'>
        <div className=' w-full h-full flex'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}