let step = 1

export const stepRecorder = (param, condition) =>{
    if(param > 0 && condition) {
        step = param;
        return step
    }
    else {
        return step
    }
     
}