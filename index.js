const noteListDiv = document.querySelector('.not-list');
let noteID = 1;
function note(id,title,content){
    this.id = id;
    this.title = title;
    this.content = content;
}

//event listeners

function eventListner(){
    document.getElementById('add-note-btn').addEventListener('click', addNewNote);
}

eventListner();



// add mew note to the list 
function addNewNote(){
    const noteTitle = document.getElementById('note-title');
    const noteContent  = document.getElementById('note-content');

    if(validateInput(noteTitle, noteContent)){
        let noteItem = note Note(notID, noteTitle.value, noteContent)
    }
}



//validation
function validateInput(title,content){
    if (title.value !== '' && content.value !== ''){
        return true;
    }else {
    if (title.value === ''){title.classList.add('warning');}
    if (content.value === ''){content.classList.add('warning');}
}

setTimeout(() => {
    title.classList.remove('warning');
    content.classList.remove('warning');   
}, 1600);
}