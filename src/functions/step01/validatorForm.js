import { validatorName } from "./validatorName"
import { validatorEmail } from "./validatorEmail"
import { validatorPhone } from "./validatorPhone"


export const validatorForm = (name, email, phone) =>{
    const errorName = document.querySelector('.error-name')
    const errorEmail = document.querySelector('.error-email')
    const errorPhone = document.querySelector('.error-phone')

    const nameValidation = validatorName(name)    
    const emailValidation = validatorEmail(email)
    const phoneValidation = validatorPhone(phone)  

    errorName.innerHTML = nameValidation == true ? '' : nameValidation
    errorEmail.innerHTML = emailValidation == true? '' : emailValidation
    errorPhone.innerHTML = phoneValidation == true ? '' : phoneValidation

    if(nameValidation, emailValidation, phoneValidation) return true
    else return false
}