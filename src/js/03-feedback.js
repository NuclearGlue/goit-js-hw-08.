import throttle from 'lodash.throttle'

const inputForm = document.querySelector('.feedback-form');
const formList = {};

inputForm.addEventListener('change', throttle(formInfo, 500));
   
function formInfo(event) {
    const  {
        elements: { email, message }
    } = event.currentTarget; 
    
        formList[`${email.name}`] = `${email.value}`;
    formList[`${message.name}`] = `${message.value}`;
    
    localStorage.setItem('feedback-form-state', formList);

         
}

inputForm.addEventListener('submit', formSend)

function formSend(event) {
    event.preventDefault();
    console.log(formList);
    localStorage.clear();
    event.currentTarget.reset();
}

