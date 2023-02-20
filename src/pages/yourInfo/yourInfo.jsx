import { Aside } from "../../components/Aside"
import { useMediaQuery } from "react-responsive"
import { useNavigate } from 'react-router-dom'

export const YourInfo = () => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    function handlerFormInfo() {
        navigate('/selectPlan')
    }

    return (
        <>
            <Aside/>

            <div className='h-auto p-8 absolute right-[3%] bg-white w-[94%] mt-[100px] rounded-lg
            md:relative md:py-8 md:px-0 md:my-0 md:mx-auto md:bg-transparent md:w-[450px] md-justify-self-center md:right-0'>
                <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Personal Info</h2>
                <p className='font-normal text-gray-400'>Please provide your name, email address, and phone number.</p>
                <form className='mt-6'>
                    <label className='text-[#02295a] text-sm mb-2 font-thin'>Name</label>
                    <label className='error-name text-[#ed3548] text-sm float-right font-bold'></label>
                    <br />
                    <input className="nameInput mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold"
                        type='text' placeholder='Wendell Borges'></input>
                    <br />
                    <label className='text-[#02295a] text-sm mb-2 font-thin'>Email Adress</label>
                    <label className='error-email text-[#ed3548] text-sm float-right font-bold'></label>
                    <br />
                    <input className="mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold"
                        type='email' placeholder='contatoWendell@gmail.com'></input>
                    <br />
                    <label className='text-[#02295a] text-sm mb-2 font-thin'>Phone Number</label>
                    <label className='error-phone text-[#ed3548] text-sm float-right font-bold'></label>
                    <br />
                    <input className="mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold"
                        type='tel' placeholder='11 99999-9999'></input>
                </form>

                <div className={`flex justify-end items-end h-[60px] absolute w-full bottom-[0px]
                    ${isMobile && 'hidden'}`}>
                    <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => handlerFormInfo()}>Next Step</button>
                </div>

            </div>

            <div className={`absolute bottom-[0px] h-[80px] w-full flex items-center justify-end bg-white 
                    ${!isMobile && 'hidden'}`}>
              <button className='mr-5 py-3 px-5 bg-[#02295a] text-white font-bold h-[50px] rounded-md hover:bg-[#473dff]' onClick={() => handlerFormInfo()}>Next Step</button>
            </div>

        </>
    )
}