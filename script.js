var firebaseConfig = {
    apiKey: "AIzaSyAOhLAoCJ4mog1602y0VISshDVQlifD8XA",
    authDomain: "xino-6347e.firebaseapp.com",
    projectId: "xino-6347e",
    storageBucket: "xino-6347e.appspot.com",
    messagingSenderId: "722453686386",
    appId: "1:722453686386:web:a6d8870cb7feb79050baeb"
  };
  firebase.initializeApp(firebaseConfig);

  var userInputRef=firebase.database().ref('UserInput')

function getVal(id){
return document.getElementById(id).value
}

document.getElementById('form').addEventListener('submit',submitform)

function submitform(e){
e.preventDefault()
var name=getVal('name')
var wcomment=getVal('wcomment')
saveData(name,wcomment)
document.getElementById('submitted').innerHTML='Your comment has been submitted.'
document.getElementById('submitted').style.transition='3.5s'
document.getElementById('submitted').style.visibility='hidden'
}

function saveData(name,wcomment){
var newUserSubmission=userInputRef.push()
var submission={
    name : name,
    wcomment : wcomment
}
newUserSubmission.set(submission)
}