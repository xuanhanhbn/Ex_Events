var elUser = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if ( elUser.value.length < minLength) {
        elMsg.innerHTML = 'User must be ' + minLength + ' character or more ';
    } else
    elMsg.innerHTML = ' ';
}
elUser.addEventListener('blur', function() {
    checkUsername(5);
}, false);