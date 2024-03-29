
const contactdb = require("../models/ContactDB");

exports.contactUser = async (req,res) => {
    try{
        const {name, mobile, email, message, session} = req.body;

        await contactdb.create({"fullname" : name, "mobile" : mobile, "email" : email, "message" : message, "session" : "NA"});
        
        res.set('Access-Control-Allow-Origin', '*');
        res.json({
            success:true,
            message:"message added successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}