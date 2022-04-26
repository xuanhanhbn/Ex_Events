var elUser = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername (minLength) {
    if (elUser.value.length < minLength) {
        elMsg.innerHTML = 'Username mus be ' + minLength + 'characters or more';
    } else {
        elMsg.innerHTML = ' ';
    }
}
if (elUser.addEventListener) {
    elUser.addEventListener('blur', function() {
        checkUsername(5);
    }, false);
} else {
    elUser.attachEvent('onblur', function() {
        checkUsername(5);
    });
}