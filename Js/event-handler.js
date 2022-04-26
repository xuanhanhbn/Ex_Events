function CheckUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Nhap lon hon 5 ki tu';
    } else {
        elMsg = ' '
    }
}

var elUser = document.getElementById('username');
elUser.onblur = CheckUsername;