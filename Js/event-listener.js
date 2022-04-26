function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Phai lon hon 5 ki tu';
    } else {
        elMsg.textContent = ' ';
    }
}
var elUser = document.getElementById('username');
elUser.addEventListener('blur', checkUsername, false);