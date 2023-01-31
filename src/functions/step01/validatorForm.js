import { validatorName } from "./validatorName"
import { validatorEmail } from "./validatorEmail"
import { validatorPhone } from "./validatorPhone"


export const validatorForm = (name, email, phone) =>{
    const errorName = document.querySelector('.error-name')
    const errorEmail = document.querySelector('.error-email')
    const errorPhone = document.querySelector('.error-phone')

    errorName.innerHTML = validatorName(name)
    console.log(validatorName(name))
    errorEmail.innerHTML = validatorEmail(email)
    errorPhone.innerHTML = validatorPhone(phone)
}