const express = require("express");

const router = express.Router();

const {contactUser} = require("../controllers/contactUser");
const {getContacts} = require("../controllers/getContacts");
const {sendEmail} = require("../controllers/sendEmail");
const {sendEmailToContact} = require("../controllers/sendEmailToContact");

router.post("/contactuser", contactUser);
router.get("/getcontacts", getContacts);
router.post("/sendemail", sendEmail);
router.post("/sendemailtocontact", sendEmailToContact);

module.exports = router;