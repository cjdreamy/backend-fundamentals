# backend-fundamentals
- most essentials backend implementations

# sending data 
- from front-end to server
- through fetch
- stringfy the data first, *e.g*

 ```
 body: JSON.stringify({
        "userName": user_Name,
        "userEmail": email
    })
    ```


# recieving data 
- from Sever to Front-end and rendering it apprpiately

# handling Errors Gracefully
- since Js executes code line by line ,
 **awaiting a promise**
 **async functions**
 - getting the response and handling it in the right format