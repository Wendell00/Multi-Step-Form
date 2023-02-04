export function Aside() {
  return (
    <div className="w-1/3 h-full rounded-lg bg-no-repeat" id="sideBar">
      <ul className='w-full h-2/3 p-4'>
        <li className='flex w-full h-1/4 items-center px-2'>
          <div> <button className=' rounded-full border-2 border-[#d6d9e6] py-1 px-3 bg-[#bfe2fd]'>1</button></div>
          <div className='text-sm ml-4'>
            <p className='font-normal italic text-gray-300'>STEP 1</p>
            <p className='font-bold text-white'>YOUR INFO</p>
          </div>
        </li>
        <li className='flex w-full h-1/4 items-center px-2'>
          <div> <button className=' rounded-full border-2 border-[#d6d9e6] py-1 px-3 bg-none text-white'>2</button></div>
          <div className='text-sm ml-4'>
            <p className='font-normal italic text-gray-300'>STEP 2</p>
            <p className='font-bold text-white'>SELECT PLAN</p>
          </div>
        </li>
        <li className='flex w-full h-1/4 items-center px-2'>
          <div> <button className=' rounded-full border-2 border-[#d6d9e6] py-1 px-3 bg-none text-white'>3</button></div>
          <div className='text-sm ml-4'>
            <p className='font-normal italic text-gray-300'>STEP 3</p>
            <p className='font-bold text-white'>ADD-ONS</p>
          </div>
        </li>
        <li className='flex w-full h-1/4 items-center px-2'>
          <div> <button className=' rounded-full border-2 border-[#d6d9e6] py-1 px-3 bg-none text-white'>4</button></div>
          <div className='text-sm ml-4'>
            <p className='font-normal italic text-gray-300'>STEP 4</p>
            <p className='font-bold text-white'>SUMMARY</p>
          </div>
        </li>
      </ul>
    </div>
  )
}