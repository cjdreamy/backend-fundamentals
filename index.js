
const submit_Button = document.getElementById('submit_Button');
let Errors = []

submit_Button.addEventListener('click', (e) => {
    e.preventDefault();

let user_username = document.getElementById('user_Name').value.trim();
let email = document.getElementById('email').value.trim();

if(!username){
    Errors.push("Name cannot be blank")
    return;
}
if(!email){
    Errors.push("Enter a valid email")
    return;
}

})