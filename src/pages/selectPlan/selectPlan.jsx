import { useContext} from 'react'
import { FormContext } from '../../contexts/FormContext'
import { Aside } from '../../components/Aside'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export const SelectPlan = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const { inputsInf, setInputsInf } = useContext(FormContext)

    function handleSelectPlan(plan, value){
        setInputsInf({...inputsInf, selectedPlan: {name: plan, price: value}})
    }

    const navigate = useNavigate()

    function handlerFormInfo(param) {
        if(param) navigate('/add-ons')
        else navigate('/')
    }
    
    return (
        <>
            <Aside/>
            <div className='h-auto p-8 absolute right-[3%] bg-white w-[94%] mt-[100px] rounded-lg
            md:relative md:py-8 md:px-0 md:my-0 md:mx-auto md:bg-transparent md:w-[450px] md-justify-self-center md:right-0'>
                <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Select your plan</h2>
                <p className='font-normal text-gray-400'>You have the option oh monthly or yearly billing.</p>
                <div>
                    <ul className="md:flex md:justify-between mt-4 w-full md:w-[440px] ">
                        <li >
                            <div onClick={() => handleSelectPlan('Arcade', 9)} className={`relative border-solid border-[2px] md:border-[1px] w-full h-[80px] md:w-[130px] md:h-[160px] rounded-lg hover:border-[#473dff] 
                        cursor-pointer ${inputsInf.selectedPlan.name === 'Arcade' && 'border-[#473dff]'}`}>
                                <img src="/multi-step-form-main/assets/images/icon-arcade.svg" className="mt-4 md:mt-2 ml-2" />
                                <div className="absolute left-[60px] md:left-[0px] bottom-0 ml-2 md:mb-2 mb-3">
                                    <h2 className="md:font-thin font-bold text-[#02295a]">Arcade</h2>
                                    <p className="inf-plan font-thin text-[#9699ab]">${!inputsInf.periodPlan ? '9/mo' : '90/yr'}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSelectPlan('Advanced', 12)} className={`relative border-solid border-[2px] md:border-[1px] w-full h-[80px] md:w-[130px] md:h-[160px] rounded-lg hover:border-[#473dff] 
                        cursor-pointer ${inputsInf.selectedPlan.name === 'Advanced' && 'border-[#473dff]'}`}>
                                <img src="/multi-step-form-main/assets/images/icon-advanced.svg" className="mt-4 md:mt-2 ml-2 " />
                                <div className="absolute left-[60px] md:left-[0px] bottom-0 ml-2 md:mb-2 mb-3">
                                    <h2 className="md:font-thin font-bold text-[#02295a]">Advanced</h2>
                                    <p className="inf-plan font-thin text-[#9699ab]">${!inputsInf.periodPlan ? '12/mo' : '120/yr'}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSelectPlan('Pro', 15)} className={`relative border-solid  border-[2px] md:border-[1px] w-full h-[80px] md:w-[130px] md:h-[160px] rounded-lg hover:border-[#473dff] 
                        cursor-pointer ${inputsInf.selectedPlan.name === 'Pro' && 'border-[#473dff]'}`}>
                                <img src="/multi-step-form-main/assets/images/icon-pro.svg" className="mt-4 md:mt-2 ml-2" />
                                <div className="absolute left-[60px] md:left-[0px] bottom-0 ml-2 md:mb-2 mb-3">
                                    <h2 className="md:font-thin font-bold text-[#02295a]">Pro</h2>
                                    <p className="inf-plan font-thin text-[#9699ab]">${!inputsInf.periodPlan ? '15/mo' : '150/yr'}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='w-full h-[50px] bg-[#fff] mt-8 flex justify-center items-center text-[#9699ab]'>
                    <h2 className={`font-bold ${!inputsInf.periodPlan && 'text-[#02295a]'}`}>Monthly</h2>
                    <label className="switch">
                        <input onClick={() => {setInputsInf({...inputsInf, periodPlan: !inputsInf.periodPlan})}} type={"checkbox"} id="inputSwitch" defaultChecked={inputsInf.periodPlan}/>
                        <span className="slider round"> </span>
                    </label>
                    <h2 className={`font-bold ${inputsInf.periodPlan && 'text-[#02295a]'}`}>Yearly</h2>
                </div>
                <div className={`flex justify-between items-center absolute bottom-[0px] w-full 
                    ${isMobile && 'hidden'}`}>
                    <h1 className='cursor-pointer self-end font-bold text-[#9699ab] hover:text-[#02295a]' onClick={() => handlerFormInfo(false)}>Go Back</h1>
                    <div className='flex justify-end items-end h-[60px]'>
                        <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => handlerFormInfo(true)}>Next Step</button>
                    </div>
                </div>
            </div>

            <div className={`absolute bottom-[0px] h-[80px] w-full flex items-center justify-between bg-white 
                    ${!isMobile && 'hidden'}`}>
              <h1 className='ml-8 cursor-pointer text-lg font-bold text-[#9699ab] hover:text-[#02295a]' onClick={() => handlerFormInfo(false)}>Go Back</h1>       
              <button className='mr-5 py-3 px-5 bg-[#02295a] text-white font-bold h-[50px] rounded-md hover:bg-[#473dff]' onClick={() => handlerFormInfo(true)}>Next Step</button>
            </div>
        </>
    )
}