const express = require('express');
// const crypto = require('crypto');
const session = require('express-session');
require('dotenv').config();
const app = express();
app.use(express.json());
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false // for dev env only
    }
}))

app.get('/', (req, res) =>{
    res.render('index');
})
app.get('/404', (req, res) => {
    res.render('404');
})

app.get('/dashboard', (req, res) => {
    if(!req.session.loginedUser){
        return res.redirect('/404');
    }
    res.render('dashboard');
    
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err){
            console.log(err);
            res.send("error logging out");
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    })
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


app.post('/dashboard', (req, res) => {
  const  user = req.body.username;
  
  console.log(user);
//    res.send(user);
if (user !== 'admin'){
    return res.send("invalid credentials");
}

req.session.loginedUser = user;
console.log(req.session.loginedUser);
// res.redirect('/dashboard');
res.json({
    useN: user,
    success: true
})


})



// const MongoStore = require('connect-mongo');
// store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })

// exposing port
app.listen(PORT, (error) =>{
    if(error){
        console.log(error.message);
    }
    console.log(`server is running on port ${PORT}`)
}
)
