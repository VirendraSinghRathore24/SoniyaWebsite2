const contactdb = require("../models/ContactDB");

exports.getContacts = async (req,res) => {
    try{
            const result = await contactdb.find({});
            res.set('Access-Control-Allow-Origin', '*');
            res.json({data: result});

    }
    catch(err){
        console.log(err);
    }
}