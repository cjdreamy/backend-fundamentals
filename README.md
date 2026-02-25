# backend-fundamentals
- most essentials backend implementations

# sending data 
- from front-end to server
- through fetch
- from client
<pre>
index.ejs
</pre>
```html
<input type="text" id="user_Name" name="username" required maxlength="50" minlength="3" autocomplete="off" autocorrect="off" autofocus placeholder="Enter your username">
            
```

<pre>
index.js
</pre>

```javascript
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
```

- stringfy the data first, *e.g*

<pre>
index.js
</pre>
```javascript
JSON.stringify({
    "userName": user_Name,
    "userEmail": email
})
```
# recieving data 
- from Sever to Front-end and rendering it apprpiately
<pre>
server.js
</pre>
```javascript
//route endpoint
app.post('/register', (req, res) => {
    const {userName, userEmail} = req.body;
    
    res.json(`user info saved, ${userName} ${userEmail}`)
})
```

# handling Errors Gracefully
- since Js executes code line by line ,
- using the **try catch block** 
<pre>
server.js
</pre>
```js
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

```

 **awaiting a promise**
 **async functions**
 - getting the response and handling it in the right format