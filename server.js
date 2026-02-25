const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.render('index');
})

//route endpoint
app.post('/register', (req, res) => {
    const {userName, userEmail} = req.body;
    console.log(`got it , ${userName, userEmail}`);
    res.json(`user info saved, ${userName} ${userEmail}`)

})

// exposing port
app.listen(PORT, (error) =>{
    if(error){
        console.log(error.message);
    }
    console.log(`server is running on port ${PORT}`)
}
)
