import { useContext, useEffect, useState } from 'react'

import { FormContext } from '../../contexts/FormContext'

import { Aside } from '../../components/Aside'
import { useNavigate } from 'react-router-dom'

export const Summary = () => {
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


    return (
        <>
            <Aside/>

            <div className='justify-self-center my-0 mx-auto h-auto py-8 w-[440px] relative'>
                <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Finishing Up</h2>
                <p className='font-normal text-gray-400'>Double-check everything looks OK before confirming.</p>
                <div>
                    <div className='w-full h-auto bg-[#4d4d50] rounded-lg p-4 mt-8'>
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
                            <div className='flex justify-between items-center mt-4'>
                                <h1 className='text-[#9699ab] font-bold'>Online Service</h1>
                                <p className='text-[#02295a] font-thin'>$1/mo</p>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <h1 className='text-[#9699ab] font-bold'>Larger Storage</h1>
                                <p className='text-[#02295a] font-thin'>$2/mo</p>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <h1 className='text-[#9699ab] font-bold'>Larger Storage</h1>
                                <p className='text-[#02295a] font-thin'>$2/mo</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-6 px-4'>
                        <p className='text-[#9699ab] font-thin'>Total (per month)</p>
                        <h1 className='text-[#473dff] text-xl font-bold'>+$12mo</h1>
                    </div>
                    <div className='flex justify-between items-center mt-8 absolute w-full bottom-[0px]'>
                        <h1 className='cursor-pointer self-end font-bold text-[#9699ab] hover:text-[#02295a]' onClick={() => handlerFormInfo(false)}>Go Back</h1>
                        <div className='flex justify-end items-end h-[60px]'>
                            <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => handlerFormInfo(true)}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}