import { Aside } from "../../components/Aside"
import { useMediaQuery } from "react-responsive"
import { useNavigate } from 'react-router-dom'
import { useContext} from 'react'
import { FormContext } from '../../contexts/FormContext'
import * as z from 'zod';

export const YourInfo = () => {

    const { setSubmitInf } = useContext(FormContext)

    const schema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(10).max(13)
      });

    const formData = { name: '', email: '', phone: ''};

    const navigate = useNavigate()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    function validForm(){
        formData.name = document.querySelector('.nameInput').value
        formData.email = document.querySelector('.emailInput').value
        formData.phone = document.querySelector('.phoneInput').value

        const forms = [[formData.name, 'name'], [formData.email, 'email'], [formData.phone, 'phone']]
        const formsLabel = [document.querySelector('.name'), document.querySelector('.email'), document.querySelector('.phone')]
        
        for(let c of formsLabel){
            c.innerHTML = ''
        }
        
        try {
            schema.parse(formData);
            setSubmitInf(true)
            handlerFormInfo()
        }catch (error) {
            for(let c of Object.values(error)[0]){
                console.log(c.path[0])
                let text = document.querySelector(`.${c.path[0]}`).innerHTML = `${c.path[0]} invalid`

            }
        }

        for(let c of forms){
            if(c[0] == ''){
                let text = document.querySelector(`.${c[1]}`).innerHTML = 'This field is required'
            }
        }
    }

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
                    <label className='name text-[#ed3548] text-sm float-right font-bold'></label>
                    <br />
                    <input className="nameInput mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold"
                        type='text' placeholder='Wendell Borges'></input>
                    <br />
                    <label className='text-[#02295a] text-sm mb-2 font-thin'>Email Adress</label>
                    <label className='email text-[#ed3548] text-sm float-right font-bold'></label>
                    <br />
                    <input className="emailInput mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold"
                        type='email' placeholder='contatoWendell@gmail.com'></input>
                    <br />
                    <label className='text-[#02295a] text-sm mb-2 font-thin'>Phone Number</label>
                    <label className='phone text-[#ed3548] text-sm float-right font-bold'></label>
                    <br />
                    <input className="phoneInput mb-4 w-full rounded-lg border-solid border border-gray-300 focus:border-[#] px-4 text-[#02295a] py-2 font-bold"
                        type='tel' placeholder='11 99999-9999'></input>
                </form>

                <div className={`flex justify-end items-end h-[60px] absolute w-full bottom-[0px]
                    ${isMobile && 'hidden'}`}>
                    <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => validForm()}>Next Step</button>
                </div>

            </div>

            <div className={`absolute bottom-[0px] h-[80px] w-full flex items-center justify-end bg-white 
                    ${!isMobile && 'hidden'}`}>
              <button className='mr-5 py-3 px-5 bg-[#02295a] text-white font-bold h-[50px] rounded-md hover:bg-[#473dff]' onClick={() => validForm()}>Next Step</button>
            </div>

        </>
    )
}