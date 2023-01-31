export const validatorEmail = (param) =>{
    if(param.length == 0) return 'field is required'; // Retorna campo Requirido
    else if(param.indexOf('@') < 0) return 'invalid email';
    else return ''; // Retorna correto
}