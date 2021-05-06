const express = require("express")
const app = express()
const https = require("https")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res)=>{
    const RSS_URL = "https://www.flickr.com/services/feeds/photos_public.gne?format=json&ids"

    https.get(RSS_URL, response=>{

        console.log("statusCode: ", response.statusCode)
        console.log("headers: ", response.headers)
        response.on('data', data =>{
            console.log(data)
            res.sendFile(__dirname+"/index.html")
        })
    })

})
app.listen(3000, ()=>{
    console.log("running on port 3000")
})

app.post("/",(req, res) =>{

    // res.send(req.body)
})