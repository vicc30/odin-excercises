
const validation = () => {
    //Get validation

    //Selectors form
    var form = document.getElementById('form');
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var message = document.getElementById('message');

    //RegExp
    const nameRegExp = /[^A-Za-z ]/;
    const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const messageRegExp = /[^A-Za-z0-9 ,.:!"#$%&?-_]/;
    //name check validity.
    fname.addEventListener('input', e => {
        if (nameRegExp.test(fname.value)) {
            fname.setCustomValidity("Please input only valid characters");
        } else if (fname.validity.valid) {
            showError(fname);
        } else fname.setCustomValidity("");
    });
    // lname validity
    lname.addEventListener('input', e => {
        if (nameRegExp.test(lname.value)) {
            lname.setCustomValidity("Please input only valid characters");
        } else if (lname.validity.valid) {
            showError(lname);
        } else lname.setCustomValidity("");
    });

    message.addEventListener('input', e => {
        // message validity
        if (messageRegExp.test(message.value)) {
            message.setCustomValidity("Please input only valid characters");
        } else if (message.value == "") {
            message.setCustomValidity("please add a message");
        } else message.setCustomValidity("");
    });

    //When succed submit
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert("Form Submitted!");
    });
}

function showError(element) {
    if (element.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        element.setCustomValidity('You need to enter some value');
    } else if (element.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        element.setCustomValidity('Entered value needs to be an e-mail address.');
    } else if (element.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        element.setCustomValidity(`This should be at least ${element.minLength} characters; you entered ${element.value.length}.`)
    }
}

validation();