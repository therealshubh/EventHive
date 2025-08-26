const express = require("express");
const app = express();
const router = express.Router();

EV_API = "https://eventlist.free.beeceptor.com/events";

router.get('/',async(req,res) => {
     try{
        const response = await fetch(EV_API);
        if(!response.ok){
            throw new Error(`Error status is:${response.status}`);
            
        }
        const events = await response.json();
        // console.log(events);
        res.send(events);
        
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "failed to fetch data"});
    }
})

module.exports = router;