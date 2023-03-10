import { useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';


export function Aside() {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const location = useLocation();

  if(isMobile){
    return (
      <div className="w-full h-[150px] bg-no-repeat relative" id="sideBarMobile">
        <ul className='w-full h-1/3 p-4'>
          <div className="flex justify-center mt-4">
            <button className={`rounded-full border-2 border-[#d6d9e6] py-1 px-3 mx-2 bg-none text-white 
            ${location.pathname === '/' && 'bg-[#bfe2fd] text-black'}`}>1</button>

            <button className={`rounded-full border-2 border-[#d6d9e6] py-1 px-3 mx-2 bg-none text-white 
            ${location.pathname === '/selectPlan' && 'bg-[#bfe2fd] text-black'}`}>2</button>

            <button className={`rounded-full border-2 border-[#d6d9e6] py-1 px-3 mx-2 bg-none text-white 
            ${location.pathname === '/add-ons' && 'bg-[#bfe2fd] text-black'}`}>3</button>

            <button className={`rounded-full border-2 border-[#d6d9e6] py-1 px-3 mx-2 bg-none text-white 
            ${location.pathname == '/summary' && 'bg-[#bfe2fd] text-black'}`}>4</button>
          </div>
        </ul>
      </div>
    )
  }
  else{
    return (
      <div className="w-1/3 h-full rounded-lg bg-no-repeat relative" id="sideBar">
        <ul className='w-full h-2/3 p-4'>
          <li className='flex w-full h-1/4 items-center px-2'>
            <div> <button className={`rounded-full border-2 border-[#d6d9e6] py-1 px-3 bg-none text-white 
            ${location.pathname === '/' && 'bg-[#bfe2fd] text-black'}`}>1</button></div>
            <div className='text-sm ml-4'>
              <p className='font-normal italic text-gray-300'>STEP 1</p>
              <p className='font-bold text-white'>YOUR INFO</p>
            </div>
          </li>
          <li className='flex w-full h-1/4 items-center px-2'>
            <div> <button className={`rounded-full border-2 border-[#d6d9e6] py-1 px-3 bg-none text-white 
            ${location.pathname === '/selectPlan' && 'bg-[#bfe2fd] text-black'}`}>2</button></div>
            <div className='text-sm ml-4'>
              <p className='font-normal italic text-gray-300'>STEP 2</p>
              <p className='font-bold text-white'>SELECT PLAN</p>
            </div>
          </li>
          <li className='flex w-full h-1/4 items-center px-2'>
            <div> <button className={`rounded-full border-2 border-[#d6d9e6] py-1 px-3 bg-none text-white 
            ${location.pathname === '/add-ons' && 'bg-[#bfe2fd] text-black'}`}>3</button></div>
            <div className='text-sm ml-4'>
              <p className='font-normal italic text-gray-300'>STEP 3</p>
              <p className='font-bold text-white'>ADD-ONS</p>
            </div>
          </li>
          <li className='flex w-full h-1/4 items-center px-2'>
            <div> <button className={`rounded-full border-2 border-[#d6d9e6] py-1 px-3 bg-none text-white 
            ${location.pathname == '/summary' && 'bg-[#bfe2fd] text-black'}`}>4</button></div>
            <div className='text-sm ml-4'>
              <p className='font-normal italic text-gray-300'>STEP 4</p>
              <p className='font-bold text-white'>SUMMARY</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}