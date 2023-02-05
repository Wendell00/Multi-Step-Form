import { useContext, useEffect, useState } from 'react'

import { FormContext } from '../../contexts/FormContext'

import { Aside } from '../../components/Aside'
import { useNavigate } from 'react-router-dom'

export const Summary = () => {
    const { periodPlan, setPeriodPlan } = useContext(FormContext)

    function handleSelectPlan(param){
        setSelectedPlan(param)
    }

    const navigate = useNavigate()

    function handlerFormInfo(param) {
        if(param) navigate('/summary')
        else navigate('/add-ons')
    }


    return (
        <>
            <Aside/>

            <div className='justify-self-center my-0 mx-auto h-auto py-8'>
                <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Finishing Up</h2>
                <p className='font-normal text-gray-400'>Double-check everything looks OK before confirming.</p>

                <div className='flex justify-between items-center mt-8'>
                    <h1 className='cursor-pointer self-end font-bold text-[#9699ab] hover:text-[#02295a]' onClick={() => handlerFormInfo(false)}>Go Back</h1>
                    <div className='flex justify-end items-end h-[60px]'>
                        <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => handlerFormInfo(true)}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}