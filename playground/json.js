/*var obj={
    name:'Raman',
}
var strObj=JSON.stringify(obj);//returns a JSON stringified version i.e result stored in object is a string not an object anymore
console.log(typeof strObj);
console.log(strObj);
*/
/*
var personString='{"name":"Raman","age":27}';//json format.
var person=JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/


const fs=require('fs');
var originalNote={
    title:'Some Title',
    body:'Some Body'
}
const OriginalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',OriginalNoteString);

var noteString=fs.readFileSync('notes.json');
const note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);