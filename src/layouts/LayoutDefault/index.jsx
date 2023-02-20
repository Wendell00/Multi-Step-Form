import { Outlet } from 'react-router-dom'

export function LayoutDefault() {
  return (
    <div className='w-full min-h-[650px] h-screen flex justify-center items-center bg-[#cfe2fe]'>
      <main className='h-full w-[960px] md:h-[580px] bg-[#f0f6ff] md:rounded-2xl shadow-2xl md:p-10'>
        <div className='relative w-full h-full flex'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}