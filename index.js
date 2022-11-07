import  express  from "express";
import cors from 'cors'

const app = express()

//configs
app.use(cors());
app.use(express.json())
//global V
const users = []
const tweets = []
app.post("/sign-up", (req,res)=>{
    const data = req.body 
    users.push(data)
    console.log('SEUS USUARIOS',users)
   res.send('OK')
})


app.post("/tweets", (req,res)=>{

   const {username , tweet} = req.body
   const result = users.find((element) => element.username === req.body.username);
    
    const sendTweet = {
        username: username,
        avatar: result.avatar,
        tweet: tweet
    }
    tweets.unshift(sendTweet)
    console.log(sendTweet)  
    res.send('OK')
})

app.get("/tweets", (req,res)=>{
    console.log('SEUS TEWEETS',tweets)
    const showTweets = tweets.slice(0,10)
    res.send(showTweets)
})

app.listen(5000 , ()=>{
    console.log("server runnign in port:5000")
})