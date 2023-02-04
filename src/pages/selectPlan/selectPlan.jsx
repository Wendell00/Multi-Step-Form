import { useContext, useState } from 'react'

import { FormContext } from '../../contexts/FormContext'

import { Aside } from '../../components/Aside'

export const SelectPlan = () => {
    const { selectedPlan } = useContext(FormContext)

    return (
        <>
            <Aside />

            <div className='justify-self-start ml-12 h-auto py-8'>
                <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Select your plan</h2>
                <p className='font-normal text-gray-400'>You have the option oh monthly or yearly billing.</p>
                <div>
                    <ul className="flex justify-center mt-4">
                        <li >
                            <div onClick={() => handleSelectPlan('arcade')} className={`relative border-solid border-gray-300 border-[1px] w-[120px] h-[160px] mr-8 rounded-lg hover:border-[#473dff] 
                        cursor-pointer ${selectedPlan === 'arcade' && 'border-[#473dff]'}`}>
                                <img src="/multi-step-form-main/assets/images/icon-arcade.svg" className="mt-2 ml-2" />
                                <div className="absolute bottom-0 ml-2 mb-2">
                                    <h2 className="font-thin text-[#02295a]">Arcade</h2>
                                    <p className="font-thin text-[#9699ab]">$9/mo</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSelectPlan('advanced')} className="relative border-solid border-[1px] border-gray-300 w-[120px] h-[160px] mr-8 rounded-lg hover:border-[#473dff] 
                        cursor-pointer">
                                <img src="/multi-step-form-main/assets/images/icon-advanced.svg" className="mt-2 ml-2" />
                                <div className="absolute bottom-0 ml-2 mb-2">
                                    <h2 className="font-thin text-[#02295a]">Advanced</h2>
                                    <p className="font-thin text-[#9699ab]">$12/mo</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleSelectPlan('pro')} className="relative border-solid border-[1px] border-gray-300 w-[120px] h-[160px] mr-8 rounded-lg hover:border-[#473dff] 
                        cursor-pointer">
                                <img src="/multi-step-form-main/assets/images/icon-pro.svg" className="mt-2 ml-2" />
                                <div className="absolute bottom-0 ml-2 mb-2">
                                    <h2 className="font-thin text-[#02295a]">Pro</h2>
                                    <p className="font-thin text-[#9699ab]">$15/mo</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}