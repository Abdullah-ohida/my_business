const form = document.querySelector('.form');
const username = document.getElementById('name');
const email = document.getElementById("email");
const number = document.getElementById('mobile');
const companyName = document.getElementById("company");
const select = document.getElementById('select');
const closeBtn = document.querySelector(".close-btn");
const textArea = document.getElementById('description');
const modalOverlay = document.querySelector('.modal-overlay');


// Checking erorr in form
function showError(input, message) {
    const formValidate = input.parentElement;
    formValidate.className = "form-validate error";
    const small = formValidate.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formValidate = input.parentElement;
    formValidate.className = "form-validate success";
}

//Check if email is valid 
function checkValid(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        return true
    } else {
        showError(input, "Email is not valid");
        return false
    }
}


// Check required input
function checkInputField(inputField) {
    inputField.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getUpper(input)} is required`);
            return false
        } else {
            showSuccess(input);
            return true
        }
    });
}


// Get input lenght
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getUpper(input)} must be at least ${min} character`);
        return false
    } else if (input.value.length > max) {
        showError(input, `${getUpper(input)} must be less than ${max} character`);
        return false
    }
    else {
        showSuccess(input)
        return true
    }
}

// Get upper case
function getUpper(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Form validate;


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputField([username, email, companyName, textArea, number]);
    checkLength(username, 3, 15);
    checkLength(number, 6, 20);
    checkValid(email)
    if (checkLength(username, 3, 15)) {
        if (checkLength(number, 6, 20)) {
            if (checkValid(email)) {
                modalOverlay.classList.add('open-modal')
            }
        }
    }
});


closeBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('open-modal')
});

closeBtn.addEventListener('click', function () {
    window.location.reload();

})