window.alert("welcome");
var database = firebase.database();
var preData =document.getElementById("Content");

var preDataRef= database.ref('/users/'+'parth').child('data');

  preDataRef.once('value').then(function(snap){
  document.getElementById("Content").innerText=snap.val();
  x=snap.val();
  });

// setInterval("myfunction();",1000);
document.getElementById("Content").innerHTML=x;
moveCursorToEnd(document.getElementById("Content"));

function myfunction() {

var x = document.getElementById("Content").innerHTML;
document.getElementById("demo").innerHTML=x;

writeUserData('parth', x);
}

// write functions
function writeUserData(userId, x) {
  firebase.database().ref('users/' + userId+'/data').set( x );}

  function moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}
