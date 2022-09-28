let userPassword = prompt ('Please enter the password.');
let secret = 'yes';
let count = 0;
let goodSpelling = "attempts";

window.onload = function checkPassword (userPassword) {
    while (count < 2) {
        if (userPassword === secret) {
            alert ('Well done. You may proceed.');
            console.log('The secret is ' + secret);
            return true;
        } else {
            count++;
            if (count == 1) {
                goodSpelling = 'attempt'
            }
            userPassword = prompt(`Try again. You have ${3-count} ${goodSpelling} left`);
            if (count > 2) {
                return false;
            }
        }
    }
}