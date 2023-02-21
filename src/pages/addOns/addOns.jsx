import { useContext, useEffect } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { Aside } from '../../components/Aside'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from "react-responsive"

export const AddOns = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const { inputsInf, setInputsInf, submitInf } = useContext(FormContext)

    function handleSelectPlan(param){
        setSelectedPlan(param)
    }

    const navigate = useNavigate()

    function handlerFormInfo(param) {
        if(param) navigate('/summary')
        else navigate('/selectPlan')
    }

    useEffect(() =>{
        if(!submitInf){
            navigate('/')
        }
    }, [])

    return (
        <>
            <Aside/>
            <div className='h-auto p-8 absolute right-[3%] bg-white w-[94%] mt-[100px] rounded-lg
            md:relative md:py-8 md:px-0 md:my-0 md:mx-auto md:bg-transparent md:w-auto md-justify-self-center md:right-0'>
                <h2 className='text-[#02295a] text-2xl font-bold mb-2'>Pick add-ons</h2>
                <p className='font-normal text-gray-400'>Add-ons help enhance your gaming experience.</p>
                <div>
                    <ul className='w-auto md:w-[455px]'>
                        <li className='flex justify-between mt-2 w-full items-center border-[1px] border-solid border-[#473dff] rounded-lg p-2'>
                            <input type="checkbox" className='addCheck bg-[#473dff] justify-self-center 
                            ml-[0px] mr-[20px] md:mr-[0px] md:ml-[15px]' onClick={() => {
                                setInputsInf({...inputsInf, onlineService: {active: !inputsInf.onlineService.active, price: 1}}) 
                                }} defaultChecked={inputsInf.onlineService.active}/>
                            <div className='flex-1 md:flex-none md:ml-[-93px]'>
                                <p className='text-[#02295a] font-bold'>Online service</p>
                                <p className='text-[#9699ab] font-thin'>Access to multiplayer games</p>
                            </div>
                            <div className='font-thing text-[#473dff] text-sm mr-[15px]'>+${!inputsInf.periodPlan ? '1/mo' : '10/yr'}</div>
                        </li>
                        <li className='flex mt-2 justify-between w-full items-center border-[1px] border-solid border-[#473dff] rounded-lg p-2'>
                            <input type="checkbox" className='addCheck bg-[#473dff] justify-self-center ml-[0px] mr-[20px] md:mr-[0px] md:ml-[15px]' onClick={() => {
                                setInputsInf({...inputsInf, largerStorage: {active: !inputsInf.largerStorage.active, price: 2}})}} defaultChecked={inputsInf.largerStorage.active}/>
                            <div className='flex-1 md:flex-none md:ml-[-125px]'>
                                <p className='text-[#02295a] font-bold'>Larger storage</p>
                                <p className='text-[#9699ab] font-thin'>Extra 1TB of cloud save</p>
                            </div>
                            <div className='font-thing text-[#473dff] text-sm mr-[15px]'>+${!inputsInf.periodPlan ? '2/mo' : '20/yr'}</div>
                        </li>
                        <li className='flex mt-2 justify-between w-full items-center border-[1px] border-solid border-[#473dff] rounded-lg p-2'>
                            <input type="checkbox" className='addCheck checked:bg-[#473dff] justify-self-center ml-[0px] mr-[20px] md:mr-[0px] md:ml-[15px]' onClick={() => {
                                setInputsInf({...inputsInf, customizableProfile: {active: !inputsInf.customizableProfile.active, price: 2}})}} defaultChecked={inputsInf.customizableProfile.active}/>
                            <div className='flex-1 md:flex-none md:ml-[-85px]'>
                                <p className='text-[#02295a] font-bold'>Customizable Profile</p>
                                <p className='text-[#9699ab] font-thin'>Custom theme on your profile</p>
                            </div>
                            <div className='font-thing text-[#473dff] text-sm mr-[15px]'>+${!inputsInf.periodPlan ? '2/mo' : '20/yr'}</div>
                        </li>
                    </ul>
                    <div className={`flex justify-between items-center absolute bottom-[0px] w-full 
                        ${isMobile && 'hidden'}`}>
                        <h1 className='cursor-pointer self-end font-bold text-[#9699ab] hover:text-[#02295a]' onClick={() => handlerFormInfo(false)}>Go Back</h1>
                        <div className='flex justify-end items-end h-[60px]'>
                            <button className='py-3 px-5 bg-[#02295a] text-white font-bold rounded-lg hover:bg-[#473dff]' onClick={() => handlerFormInfo(true)}>Next Step</button>
                        </div>
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