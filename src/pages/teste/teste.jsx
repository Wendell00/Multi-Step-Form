import { Aside } from "../../components/Aside"

import { useNavigate } from 'react-router-dom'

export const TestPage = () => {
    const navigate = useNavigate()

    function handlerFormInfo() {
        navigate('/selectPlan')
    }

    return (
        <>
            <Aside/>

            {/* <div className='justify-self-center my-0 mx-auto h-auto py-8 relative'>
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
                <div className='flex justify-end items-end h-[60px] absolute w-full bottom-[0px]'>
                    <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => handlerFormInfo()}>Next Step</button>
                </div>
            </div> */}
        </>
    )
}