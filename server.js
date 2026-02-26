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
    try {
        const { userName, userEmail } = req.body;

        if (!userName || !userEmail) {
            throw new Error("Missing required fields");
        }

        console.log(`got it, ${userName} ${userEmail}`);

        res.json({
            success: true,
            message: `User info saved`,
            userName,
            userEmail
        });

    } catch (err) {
        console.error(err);

        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});


app.post('/login', (req, res) => {
  const  user = req.body.username;
  console.log(user);
//    res.send(user);
if (user !== 'admin'){
    return res.send("invalid credentials");
}

res.render('dashboard');

})

// exposing port
app.listen(PORT, (error) =>{
    if(error){
        console.log(error.message);
    }
    console.log(`server is running on port ${PORT}`)
}
)
