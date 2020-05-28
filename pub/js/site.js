$(document).ready(function() {
    set();
    setInterval(set, 5000);
});

function set() {
    var d = new Date();
    console.log(d)
    $("#date").html(("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear().toString().slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));
}