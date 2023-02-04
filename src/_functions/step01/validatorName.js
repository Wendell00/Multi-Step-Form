export const validatorName = (param) =>{
    const errorName = document.querySelector('.error-name')
    if(param.length == 0) return 'field is required' // Retorna Campo requirido
    else return true // Retorna correto
}   