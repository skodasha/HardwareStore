export function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(email) == false) {
       alert('Enter correct e-mail.');
       return false;
    }
    return true;
}
export function validateName(name) {
    if(name.length < 2) {
       alert('Enter correct name.');
       return false;
    }
    return true;
}
export function validatePassword(password) {
    if(password.length < 3) {
       alert('Incorrect password. Must consist of at least 8 characters.');
       return false;
    }
    return true;
}