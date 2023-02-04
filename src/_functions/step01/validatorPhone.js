export const validatorPhone = (param) =>{
    const errorPhone = document.querySelector('.error-phone')
    if(param.length == 0) return 'field is required' // Retorna Campo requirido
    else if(param.length < 10) return 'invalid phone'
    else return true // Retorna correto
}