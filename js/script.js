document.getElementById('submit-filed').addEventListener('click', function () {
    // user Email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // user password 
    const userField = document.getElementById('user-password');
    const userPassword = userField.value;


    if (userEmail == 'bapkapori@gmail.com' && userPassword == 'pori') {
        window.location.href = 'banking.html';
    }
    else {
        alert('please enter the valid email or password');
    }

})