
var database = firebase.database();
var preData =document.getElementById("Content");

var preDataRef= database.ref('/users/'+'parth').child('data2');//

  preDataRef.once('value').then(function(snap){
  document.getElementById("Content").innerText=snap.val();
     console.log(snap.val());
  });

setInterval("myfunction();",1000);
document.getElementById("Content").innerHTML=x;

function myfunction() {

var x = document.getElementById("Content").innerHTML;
//document.getElementById("demo").innerHTML=x;

writeUserData('parth', x);
}

// write functions
function writeUserData(userId, x) {
  firebase.database().ref('users/' + userId).set({
    data: x );
}
