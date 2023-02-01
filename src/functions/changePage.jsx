import { useNavigate } from "react-router-dom";
import  { useState } from 'react'
import { SelectPlan } from "../components/Select-Plan/selectPlan";
import { stepRecorder } from "./stepRecorder";
import { YourInfo } from "../components/Main/Your-Info/YourInfo";

export const ChangePage = () => {
    console.log(stepRecorder())
    if (stepRecorder(0) == 2){
        return (
            <SelectPlan />
        )
    }
    else {
        return (
        <YourInfo />
    )
    }
}