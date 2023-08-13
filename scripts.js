var c = document.getElementById("cel");
var f = document.getElementById("far");
function fartocel(){
    var fh = parseFloat(f.value);
    var r;
    r=(fh-32)*(5/9);
    c.value = parseFloat(r.toFixed(2));
}
function celtofar(){
    var ch = parseFloat(c.value);
    var r;
    r=(ch*(9/5))+32;
    f.value = parseFloat(r.toFixed(2));
}
