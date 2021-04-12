let dark_mode_button = document.querySelector('.navdesign');
let create_new_notes = document.querySelector('.notesbutton');
let save_new_notes = document.querySelector('.buttonsave');
let delete_new_notes = document.querySelector('.buttondelete');
let test = document.querySelectorAll('.sidebaritems');
/* Button to change to a dark mode */
// disables the css theme and enables another for colours
let colour_state = 'light'
dark_mode_button.addEventListener('click', (ev)=>{
    document.querySelector(".gridlayout").classList.toggle("dark_mode");
    document.querySelector("nav.light_mode").classList.toggle("dark_mode");
    document.querySelector(".notesbutton").classList.toggle("dark_mode");
    document.querySelector(".buttonsave").classList.toggle("dark_mode");
    document.querySelector(".buttondelete").classList.toggle("dark_mode");
    document.querySelector(".navdesign").classList.toggle("dark_mode");
    document.querySelector(".sidemenuextend").classList.toggle("side_menu_extend_darkmode");
    document.querySelector(".bottom").classList.toggle("dark_mode");
    document.querySelector(".buttonextended").classList.toggle("side_menu_extend_darkmode");
    if (colour_state === 'light') {
        document.querySelector(".navdesign").innerHTML = "Light Mode"
        console.log(colour_state)
        colour_state = 'dark'
    } else {
        document.querySelector(".navdesign").innerHTML = "Dark Mode"
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
    let divs_stored = [...document.querySelectorAll('[contenteditable] > div:not(:first-child)')]
    /* non-functional test code that failed to execute what i wanted :( */
    // let entered_notes = document.querySelector('#notearea').innerHTML
    // entered_notes.removeChild(entered_notes.childNodes[0]);
    note_storing_array.push({Title_stored, entered_notes, divs_stored})
    let new_list_item = document.createElement('li');
    new_list_item.className = 'sidebaritems';
    // new_list_item.onclick = recall_array_item(Title_stored)
    let menu_title = document.createTextNode(`${Title_stored}`);
    new_list_item.appendChild(menu_title);
    document.querySelector('.Notes_stored').appendChild(new_list_item);
    document.getElementById('notearea').outerHTML = '<div id="notearea" contenteditable="true">Enter title here</div>'
    /*Failed Experiment 2 */
    // for (let stored_note of note_storing_array) {
    //     let { Title_stored } = stored_note;
    //     test_backtick = `<li class="sidebaritems" > ${Title_stored} </li>`
    //     document.querySelector('.Notes_stored').appendChild(test_backtick);
    // }
/* Select notes */
// Select from array
// display from the array
    console.log(note_storing_array)
    let test = document.querySelectorAll('.sidebaritems');
    test.forEach(item => {
        item.addEventListener('click', (e) => {
            let recall_title = e.currentTarget.textContent
            console.log(recall_title)
            for (let note_item of note_storing_array) {
                let { Title_stored, entered_notes } = note_item;
                if (Title_stored === recall_title){
                    document.getElementById('notearea').outerHTML = `<div id="notearea" contenteditable="true">${Title_stored}<div>${entered_notes}</div></div>`
                    console.log(entered_notes)
                }
            }
        })
    });
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
// function recall_array_item(Title_stored) {
//     for (let note of note_storing_array) {
//         let { title, body } = note;
//         if (title === Title_stored){
//             console.log(title, body)
//         }
//     }

// test.forEach(item => {
//     item.addEventListener('click', (e) => {
//         let recall_title = e.currentTarget.textContent
//         console.log(recall_title)
         // for (let note of note_storing_array) {
        //     console.log(note)
            // let { title, body } = note;
            // console.log(title, body)
            // if (title == recall_title){
            //     console.log(title, body) 
            // } 
        // }
//     })
// });
    // document.getElementById('notearea').outerHTML = `<div id="notearea" contenteditable="true">Enter title here</div>`
