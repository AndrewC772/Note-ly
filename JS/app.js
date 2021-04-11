/* Button to change to a dark mode */
// disables the css theme and enables another for colours
let dark_mode_button = document.querySelector('.navdesign');
let colour_state = 'light'
dark_mode_button.addEventListener('click', (ev)=>{
    document.querySelector('.light_mode').classList.toggle("dark_mode");
    document.querySelector('nav.light_mode').classList.toggle("dark_mode");
    document.querySelector("button.light_mode").classList.toggle("dark_mode")
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

/* Select notes */
// Select from array
// display from the array