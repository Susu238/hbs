const express = require('express')
const app = express()

const port =3000
const path = require("path")
 const publicDirectory = path.join(__dirname , '../public')
app.use(express.static (publicDirectory))
// app.get('/', (req ,res)=> {
//     res.send("susu")
// })

// app.listen (port , () => {
//     console.log("everything is ok")
// })
 app.set('view engine','hbs')
const viewsDirectory = path.join(__dirname ,"../temp1/views")
app.set("views" , viewsDirectory)

app.get('/', (req ,res)=> {
    res.render('index',{
        title :"homepage",
        desc :"this is home page"
    })
})
app.get('*' , (req , res)=> {
    res.send('404 Page Not Founded')
 })

app.listen (port ,()=> {
    console.log(`example app is on port${port}`)
})