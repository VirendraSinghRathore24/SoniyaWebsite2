const express = require("express");

const router = express.Router();

const {contactUser} = require("../controllers/contactUser");
const {getContacts} = require("../controllers/getContacts");
const {sendEmail} = require("../controllers/sendEmail");

router.post("/contactuser", contactUser);
router.get("/getcontacts", getContacts);
router.post("/sendemail", sendEmail);

module.exports = router;