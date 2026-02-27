
const submit_Button = document.getElementById('submit_Button');
const errorDisplay = document.getElementById('error_Display');
const userD =  document.getElementById('userD');
let Errors = []
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//old way


submit_Button.addEventListener('click', async (e) => {
    e.preventDefault();

const user_Name = document.getElementById('user_Name').value.trim();
const email = document.getElementById('email').value.trim();
//validations

    // Validate fields
    if (!user_Name) {
        Errors.push("Name cannot be blank");
    } else if (user_Name.length < 3) {
        Errors.push("Username cannot be less than 3 characters");
    }

    if (!email) {
        Errors.push("Email cannot be blank");
    } else if (!emailPattern.test(email)) {
        Errors.push("Enter a valid email");
    }

    


    // Show errors or submit
    if (Errors.length > 0) {
        errorDisplay.innerHTML = Errors.map(err => `<p>${err}</p>`).join("");
        Errors = [];
        return; // stop further execution
    }else {
        errorDisplay.innerHTML = ""; // clear errors
        console.log("Form is valid! Send data to server...");
        const response = await fetch('/register', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "userName": user_Name,
        "userEmail": email
    })
    
    
});
const result = await response.json();
alert(`${result.userName} ${result.userEmail}`);       
    }


// displaying errors
// function showingErrors() {
//     Errors.forEach((er) =>{
//         errorDisplay.innerHTML = `<p>${er}<p/>`;
//     })
// }

 // stops further execution




// send to backend


console.log(user_Name, email )


})