window.onload = init;

function init() {
    charSearch();
}

function charSearch() {
    var request = new XMLHttpRequest();
    request.open("GET", "db.json");
    request.onreadystatechange = function() {
        var div = document.getElementById("character");
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText != null) {
                div.innerHTML = this.responseText;
            }
            else {
                div.innerHTML = "Error: no data";
            }
        }
    };
    request.send();
}
