function LoadDoc() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.body.innerHTML = this.responseText;
        }
    };
    xhr.open('GET', 'ajax_change.html', true);
    xhr.send();
}
