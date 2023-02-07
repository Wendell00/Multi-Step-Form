import { useContext, useEffect, useState } from 'react'

import { FormContext } from '../../contexts/FormContext'

import { Aside } from '../../components/Aside'
import { useNavigate } from 'react-router-dom'

export const SelectPlan = () => {
    const { selectedPlan, setSelectedPlan, 
        periodPlan, setPeriodPlan } = useContext(FormContext)

    function handleSelectPlan(param){
        setSelectedPlan(param)
        console.log(param)
    }

    const navigate = useNavigate()

    function handlerFormInfo(param) {
        if(param) navigate('/add-ons')
        else navigate('/')
    }

    return (
        <>
            <Aside/>

            <div className='justify-self-center my-0 mx-auto h-full py-8'>
                <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Select your plan</h2>
                <p className='font-normal text-gray-400'>You have the option oh monthly or yearly billing.</p>
                <div>
                    <ul className="flex justify-between mt-4 w-[440px]">
                        <li >
                            <div onClick={() => handleSelectPlan('arcade')} className={`relative border-[2px] border-solid border-[1px] w-[120px] h-[130px] rounded-lg hover:border-[#473dff] 
                        cursor-pointer ${selectedPlan === 'arcade' && 'border-[#473dff]'}`}>
                                <img src="/multi-step-form-main/assets/images/icon-arcade.svg" className="mt-2 ml-2" />
                                <div className="absolute bottom-0 ml-2 mb-2">
                                    <h2 className="font-thin text-[#02295a]">Arcade</h2>
                                    <p className="inf-plan font-thin text-[#9699ab]">${!periodPlan ? '9/mo' : '90/yr'}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSelectPlan('advanced')} className={`relative border-[2px] border-solid border-[1px] w-[120px] h-[130px] rounded-lg hover:border-[#473dff] 
                        cursor-pointer ${selectedPlan === 'advanced' && 'border-[#473dff]'}`}>
                                <img src="/multi-step-form-main/assets/images/icon-advanced.svg" className="mt-2 ml-2" />
                                <div className="absolute bottom-0 ml-2 mb-2">
                                    <h2 className="font-thin text-[#02295a]">Advanced</h2>
                                    <p className="inf-plan font-thin text-[#9699ab]">${!periodPlan ? '12/mo' : '120/yr'}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSelectPlan('pro')} className={`relative border-[2px] border-solid  border-[1px] w-[120px] h-[130px] rounded-lg hover:border-[#473dff] 
                        cursor-pointer ${selectedPlan === 'pro' && 'border-[#473dff]'}`}>
                                <img src="/multi-step-form-main/assets/images/icon-pro.svg" className="mt-2 ml-2" />
                                <div className="absolute bottom-0 ml-2 mb-2">
                                    <h2 className="font-thin text-[#02295a]">Pro</h2>
                                    <p className="inf-plan font-thin text-[#9699ab]">${!periodPlan ? '15/mo' : '150/yr'}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='w-full h-[50px] bg-[#fff] mt-8 flex justify-center items-center text-[#9699ab]'>
                    <h2 className={`font-bold ${ !periodPlan && 'text-[#02295a]'}`}>Monthly</h2>
                    <label className="switch">
                        <input onClick={() => {setPeriodPlan(!periodPlan)}} type={"checkbox"} id="inputSwitch" checked={periodPlan}/>
                        <span className="slider round"> </span>
                    </label>
                    <h2 className={`font-bold ${ periodPlan && 'text-[#02295a]'}`}>Yearly</h2>
                </div>
                <div className='flex justify-between items-center mt-8'>
                    <h1 className='cursor-pointer self-end font-bold text-[#9699ab] hover:text-[#02295a]' onClick={() => handlerFormInfo(false)}>Go Back</h1>
                    <div className='flex justify-end items-end h-[60px]'>
                        <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => handlerFormInfo(true)}>Next Step</button>
                    </div>
                </div>
            </div>
        </>
    )
}