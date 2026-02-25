
const submit_Button = document.getElementById('submit_Button');
let Errors = []

submit_Button.addEventListener('click', async (e) => {
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
//send to backend

const response = await fetch('/register', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({user_Name, email})
});

const result = await response.text();
alert(result);

})