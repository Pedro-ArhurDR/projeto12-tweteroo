import  express  from "express";
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json())
let user = {}
const tweets = [
]
app.post("/sign-up", (req,res)=>{
    const data = req.body 
    user = data
    console.log(user)
   res.send('OK')
})


app.post("/tweets", (req,res)=>{

   const {username , tweet} = req.body
    const sendTweet = {
        username: username,
        avatar: user.avatar,
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