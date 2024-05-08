const express = require('express');
const {app,server}  = require('./socket/socket')
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const authUserRoutes = require('./routes/authUserRoute');
const messageRoute = require('./routes/messageRoute')
const userRoute = require('./routes/userRoute')
const path=require('path')

const _dirname = path.resolve();

app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next()
})


app.use('/api/auth/',authUserRoutes)
app.use('/api/messages/',messageRoute)
app.use('/api/users/',userRoute)


const port = process.env.PORT || 5000;


app.use(express.static (path.join(_dirname,"/frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "frontend", "build", "index.html"));
});


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('MONGODB connected!')
    server.listen(port,()=>{
        console.log(`Running on port ${port}`)
    })

})
    .catch((error) => {
        console.error('MongoDB connection error:', error.message);
    });
