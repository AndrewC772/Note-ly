let dark_mode_button = document.querySelector('.navdesign');
let create_new_notes = document.querySelector('.notesbutton');
let save_new_notes = document.querySelector('.buttonsave');
let delete_new_notes = document.querySelector('.buttondelete');
/* Button to change to a dark mode */
// disables the css theme and enables another for colours
let colour_state = 'light'
dark_mode_button.addEventListener('click', (ev)=>{
    document.querySelector('.light_mode').classList.toggle("dark_mode");
    document.querySelector('nav.light_mode').classList.toggle("dark_mode");
    document.querySelector("button.light_mode").classList.toggle("dark_mode");
    document.querySelector(".sidemenuextend").classList.toggle("side_menu_extend_darkmode");
    if (colour_state === 'light') {
        document.querySelector("button.light_mode").innerHTML = "Light Mode"
        console.log(colour_state)
        colour_state = 'dark'
    } else {
        document.querySelector("button.light_mode").innerHTML = "Dark Mode"
        console.log(colour_state)
        colour_state = 'light'
    }
});

/* Add a new note and allow save and delete */
// create a new note object or name
//add it into the array after it is done and store what is written as a string in the object
let note_storing_array = []
create_new_notes.addEventListener('click', ()=> {
    console.log('create a note')
    document.getElementById('notearea').outerHTML = '<div id="notearea" contenteditable="true">Enter title here</div>'
    document.querySelector('.buttonsave').innerHTML = 'save'
    document.querySelector('.buttondelete').innerHTML = 'delete'
});
save_new_notes.addEventListener('click', ()=> {
    console.log('save a note')
    let Title_stored = document.querySelector('#notearea').firstChild.innerHTML;
    let entered_notes = convert_not_first()
    // let entered_notes = document.querySelector('#notearea').innerHTML
    // entered_notes.removeChild(entered_notes.childNodes[0]);
    note_storing_array.push({Title_stored, entered_notes})
    console.log(note_storing_array)
});

function convert_not_first() {
    let body = ""
    const divs = [...document.querySelectorAll('[contenteditable] > div:not(:first-child)')]
    for (const char of divs) {
        body += `${char.textContent}\n`
    }
    return body
}

delete_new_notes.addEventListener('click', ()=> {
    console.log('delete a note')
    document.getElementById('notearea').outerHTML = '<div id="notearea" contenteditable="false"></div>'
    document.querySelector('.buttonsave').innerHTML = ''
    document.querySelector('.buttondelete').innerHTML = ''
});

/* Select notes */
// Select from array
// display from the array