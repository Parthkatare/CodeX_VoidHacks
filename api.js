window.alert("welcome To continuable Workspace");
var database = firebase.database();
var preData =document.getElementById("Content");
var uemail="p,katare98@gmail,com";

var preDataRef= database.ref(uemail ).child('text');

  preDataRef.on('value',function(snap){
  document.getElementById("Content").innerHTML=snap.val();
  x=snap.val();
  });

// setInterval("myfunction();",1000);
document.getElementById("Content").innerHTML=x;
// moveCursorToEnd(document.getElementById("Content"));

function myfunction() {

var x = document.getElementById("Content").innerHTML;
// document.getElementById("demo").innerHTML=x;

writeUserData(uemail, x);
}

// write functions
function writeUserData(uemail, x) {
  firebase.database().ref(uemail+'/text').set( x );}
