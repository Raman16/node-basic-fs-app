console.log("starting app.js");
const yargs=require('yargs');
const notes=require('./notes.js');


//const argv=yargs.argv;
const titleOption={
    describe:'Title of note',
    demand:true,
    alias:'t'
}
const bodyOption={
    describe:'Body of note',
    demand:true,
    alias:'b'
}
const argv=yargs
                .command('add','Add a new note',{
                    title:titleOption,
                    body:bodyOption
                 
                })
                .command('list','List all  notes')
                .command('read','Read a note',{
                    title:titleOption
                })
                .command('remove','Remove a note',{
                    title:titleOption
                })
                .help()
                .argv;

   var command=argv._[0];

if(command==='add'){
    var note=notes.addNote(argv.title,argv.body);
    if(note){
        notes.logNote(note)
    }
    else{
        console.log('Note Already Added');
    }
}
else if(command==='list'){
    var allNotes=notes.getAll();
    console.log(`Printing Notes: ${allNotes.length} notes(s)`);
    allNotes.forEach((note)=>notes.logNote(note));
}
else if(command==='read'){
   var note= notes.getNote(argv.title);
   if(note){
      notes.logNote(note)
   }
   else{
    console.log('Note Not Found');
   }
}
else if(command==='remove'){
    var noteRemoved=notes.removeNote(argv.title);
    var message=noteRemoved?'Note removed':'Note Not Found';
    console.log(message);
}
else{
    console.log('Comman Not Found');
}


