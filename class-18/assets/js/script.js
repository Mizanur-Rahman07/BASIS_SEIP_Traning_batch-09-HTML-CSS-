$('#firstName').keyup(function () {
    checkFirstName();
});

function checkFirstName(){
    var firstNameValue=$('#firstName').val();
    let regExp = /^[a-zA-Z-\.]{2,25}$/;
    if (regExp.test(firstNameValue)) {
        $('#firstNameError').text('');
        return true;
    } else {
        $('#firstNameError').text('First Name Should be 2 to 25 Charecters and string type');
        return false;
    }
}

// -------------------------

$('#lastName').keyup(function () {
    checkLastName();
});

function checkLastName(){
    var lastNameValue=$('#lastName').val();
    if (lastNameValue.length >=2 && lastNameValue.length <=25) {
        $('#lastNameError').text('');
        return true;
    } else {
        $('#lastNameError').text('First Name Should be 5 to 20 Charecters');
        return false;
    }
}

// ------------------------

$('#email').keyup(function () {
    emailCheck();
});

function emailCheck(){
    var emailValue=$('#email').val();
    if (emailValue.length >=2 && emailValue.length <=25) {
        $('#emailError').text('');
        return true;
    } else {
        $('#emailError').text('First Name Should be 5 to 20 Charecters');
        return false;
    }
}

// -------------------

$('#password').keyup(function () {
    passCheck();
});

function passCheck(){
    var passValue=$('#password').val();
    if (passValue.length >=2 && passValue.length <=25) {
        $('#passwordError').text('');
        return true;
    } else {
        $('#passwordError').text('First Name Should be 5 to 20 Charecters');
        return false;
    }
}

// ------------------------

$('#confirmPassword').keyup(function () {
    conPassCheck();
});

function conPassCheck(){
    var conPassValue=$('#password').val();
    var conPassValue =$('#confirmPassword').val();
    if (conPassValue.length >=2 && conPassValue.length <=25) {
        $('#ConPasswordError').text('');
        return true;
    } else {
        $('#ConPasswordError').text('First Name Should be 5 to 20 Charecters');
        return false;
    }
}

// -------------------------



$('#registerForm').submit(function () {
    if(checkFirstName()==true && checkLastName()==true && emailCheck()==true &&PassCheck()==true &&conPassCheck()==true){
        return true;
    }else{
        return false;
    }

    // alert('its ok')
});


// regular expression link : ultrapico.com