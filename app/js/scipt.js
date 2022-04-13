const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

function setErrorFor(element, message) {
    const inputControl = element.parentElement;
    const small = inputControl.querySelector('small');

    //The message
    small.innertext = message;
    inputControl.className = 'input-control error';
}

function isValidEmai(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs(){
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setErrorFor(email, 'Error, please check your email');
    }else if(!isValidEmai(emailValue)) {
        setErrorFor(email, 'Error, please check your email')
    }
};