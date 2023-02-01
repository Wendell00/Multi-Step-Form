import { useState } from "react"

export function stepRecorder(param){
    const [step, setStep] = useState(1)

    if(param > 0) {
        setStep(param)
        return ''
    }
    else {
        return step
    }
}