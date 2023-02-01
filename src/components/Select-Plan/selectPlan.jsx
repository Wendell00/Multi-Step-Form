export const SelectPlan = () =>{
    return (
        <div className='justify-self-start ml-12 h-auto py-8'>
            <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Select your plan</h2>
            <p className='font-normal text-gray-400'>You have the option oh monthly or yearly billing.</p>
            <div>
                <ul className="flex justify-center mt-4">
                    <li>
                        <div className="border-solid border-2 border-gray-300 w-[120px] h-[140px] mr-8 rounded-lg hover:border-[#473dff] cursor-pointer">
                            <img src="/multi-step-form-main/assets/images/icon-arcade.svg" alt="" srcset="" />                        
                        </div>
                    </li>
                    <li>
                        <div className="border-solid border-2 border-gray-300 w-[120px] h-[140px] mr-8 rounded-lg hover:border-[#473dff] cursor-pointer">
                            <img src="/multi-step-form-main/assets/images/icon-advanced.svg" alt="" srcset="" />  
                        </div>
                        </li>
                    <li>
                        <div className="border-solid border-2 border-gray-300 w-[120px] h-[140px] mr-8 rounded-lg hover:border-[#473dff] cursor-pointer">
                            <img src="/multi-step-form-main/assets/images/icon-pro.svg" alt="" srcset="" />  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}