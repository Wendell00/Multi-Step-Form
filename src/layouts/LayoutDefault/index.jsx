import { Outlet } from 'react-router-dom'
import Git from '/assets/gitIcon.svg'

export function LayoutDefault() {
  return (
    <div className='w-full min-h-[650px] h-screen flex justify-center items-center bg-[#cfe2fe]'>
      <a href="https://github.com/Wendell00" target="_blank">
        <img src={Git} className="absolute top-[1%] right-[1%] z-50 w-[40px]"></img>
      </a>
      <main className='h-full w-[960px] md:h-[580px] bg-[#f0f6ff] md:rounded-2xl shadow-2xl md:p-10'>
        <div className='relative w-full h-full flex'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}