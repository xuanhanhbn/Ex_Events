function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if (elUsername.value.length < 5) {
        elMsg.textContent = ' phai lon hon 5 ky tu ';
    } else {
        elMsg.textContent = ' ';
    }
}
console.log('elUsername.Value.length');