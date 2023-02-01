import { useNavigate } from "react-router-dom";
import  { useEffect } from 'react'
import { SelectPlan } from "../components/Select-Plan/selectPlan";
import { stepRecorder } from "./stepRecorder";
import { YourInfo } from "../components/Main/Your-Info/YourInfo";

export const ChangePage = () => {
    useEffect(() =>{
        stepRecorder(0,false)
    }, [])

    if (stepRecorder(0, true) == 2){
        return (
            <SelectPlan />
        )
    }
    else {
        console.log(stepRecorder(0,true))
        return (
        <SelectPlan />
    )
    }
}