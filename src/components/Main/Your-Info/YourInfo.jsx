import { validatorForm } from "../../../functions/step01/validatorForm"



export const YourInfo = () =>{
    return( 
        <div className='justify-self-center my-0 mx-auto h-auto py-8'>
        <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Personal Info</h2>
        <p className='font-normal text-gray-400 font-bold'>Please provide your name, email address, and phone number.</p>
        <form className='mt-6'>
            <label className='text-[#02295a] text-sm mb-2 font-thin'>Name</label> 
            <br/>
            <input className="mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold" 
            type='text' placeholder='Wendell Borges'></input>
            <br/>
            <label className='text-[#02295a] text-sm mb-2 font-thin'>Email Adress</label>
            <br/>
            <input className="mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold" 
            type='email' placeholder='contatoWendell@gmail.com'></input>
            <br/>
            <label className='text-[#02295a] text-sm mb-2 font-thin'>Phone Number</label>
            <br/>
            <input className="mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold" 
            type='tel' placeholder='e.g. +1 234 567 890'></input>
        </form>
        <div className='flex justify-end items-end h-[60px]'>
            <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg ' onClick={validatorForm}>Next Step</button>
        </div>
    </div>
    )
}