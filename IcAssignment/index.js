const express = require('express');
const authRouter=require('./routers/auth.router.js');
const blogRouter=require('./routers/blog.router.js');

const app = express()

app.use(express.json())

app.use("/auth", authRouter)
app.use("/blog", blogRouter)

const PORT = 4000

app.listen(PORT, () => console.log("server started running at the PORT:", PORT))