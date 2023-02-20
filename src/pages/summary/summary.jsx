import { useContext, useEffect, useState } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { Aside } from '../../components/Aside'
import { Submit } from '../../components/Submit/submit'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const SummaryOns = (props) =>{

    const { inputsInf, setInputsInf } = useContext(FormContext)

    if(props.inf.active){
        return(
            <>
                <div className='flex justify-between items-center mt-4'>
                        <h1 className='text-[#9699ab] font-bold'>{props.title}</h1>
                        <p className='text-[#02295a] font-thin'>${inputsInf.periodPlan ? `${props.inf.price * 10}/yr` : `${props.inf.price}/mo`}</p>
                 </div>
            </>
        )
    }
}

export const Summary = () => {
    const [submitConfirm, setSubmitConfirm] = useState(false)

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const { inputsInf, setInputsInf } = useContext(FormContext)

    function handlePlanValue(){
        const pricePlan = inputsInf.periodPlan ? inputsInf.selectedPlan.price * 10 : inputsInf.selectedPlan.price
        return pricePlan
    }

    const navigate = useNavigate()

    function handlerFormInfo(param) {
        if(param) navigate('/summary')
        else navigate('/add-ons')
    }

    function handlerSubmit(){
        setSubmitConfirm(true)
    }

    function calculateTotalPrice(param){
        let total = 0
        if(param.active){
            total = param.price
            if(inputsInf.periodPlan){
                total *= 10
            }
        }
        return total
    }

    function totalPrice(){
        let total = calculateTotalPrice(inputsInf.onlineService)
        total += calculateTotalPrice(inputsInf.largerStorage)
        total += calculateTotalPrice(inputsInf.customizableProfile)
        return total
    }

    function verify(){
        if(!isMobile && submitConfirm) return true
        else false
    }

    return (
        <>
            <Aside/>
            {!submitConfirm ? (
                <div className='h-auto p-8  right-[3%] mt-[100px] rounded-lg w-[94%] absolute bg-white
                md:relative md:py-8 md:px-0 md:my-0 md:mx-auto md:bg-transparent md:w-[450px] md-justify-self-center md:right-0'>
                    <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Finishing Up</h2>
                    <p className='font-normal text-gray-400'>Double-check everything looks OK before confirming.</p>
                    <div>
                        <div className='w-full h-auto bg-[#d6d9e6] rounded-lg p-4 mt-8'>
                            <div className='flex justify-between items-center mb-2'>
                                <div>
                                    <h1 className='text-[#02295a] font-bold'>{inputsInf.selectedPlan.name} ({inputsInf.periodPlan ? 'Yearly': 'Monthly'})</h1>
                                    <p className='underline text-[#473dff] cursor-pointer' onClick={() =>{navigate('/selectPlan')}}>Change</p>
                                </div>
                                <div>
                                    <h1 className='text-[#02295a] font-bold'> ${handlePlanValue()}/{inputsInf.periodPlan ? 'yr': 'mo'}</h1>
                                </div>
                            </div>
                            <div className=' items-center border-t-2 border-[#9699ab]'>
                                <SummaryOns inf={inputsInf.onlineService} title='Online Service'/>
                                <SummaryOns inf={inputsInf.largerStorage} title='Larger Storage'/>
                                <SummaryOns inf={inputsInf.customizableProfile} title='Customizable Profile'/>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-6 px-4'>
                            <p className='text-[#9699ab] font-thin'>Total (per {inputsInf.periodPlan ? 'yearly': 'monthly'})</p>
                            <h1 className='text-[#473dff] text-xl font-bold'>+${handlePlanValue()+totalPrice()}/{inputsInf.periodPlan ? 'yr' : 'mo'}</h1>
                        </div>
                        <div className={`flex justify-between items-center absolute bottom-[0px] w-full 
                            ${isMobile && 'hidden'}`}>
                            <h1 className='cursor-pointer self-end font-bold text-[#9699ab] hover:text-[#02295a]' onClick={() => handlerFormInfo(false)}>Go Back</h1>
                            <div className='flex justify-end items-end h-[60px]'>
                                <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => handlerSubmit()}>Confirm</button>
                        </div>
                    </div>
                    </div>
                </div>
            ) : ( <Submit/> )}

            {!submitConfirm && isMobile ? ( <div className={`absolute bottom-[0px] h-[80px] w-full flex items-center justify-between bg-white 
                    ${verify() && 'hidden'}`}>
              <h1 className='ml-8 cursor-pointer text-lg font-bold text-[#9699ab] hover:text-[#02295a]' onClick={() => handlerFormInfo(false)}>Go Back</h1>       
              <button className='mr-5 py-3 px-5 bg-[#02295a] text-white font-bold h-[50px] rounded-md hover:bg-[#473dff]' onClick={() => handlerSubmit()}>Confirm</button>
            </div>) : (<div> </div>)
            }
            
        </>
    )
}