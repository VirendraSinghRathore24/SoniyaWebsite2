const express = require("express");

const router = express.Router();

const { contactUser } = require("../controllers/contactUser");
const { getContacts } = require("../controllers/getContacts");
const { sendEmail } = require("../controllers/sendEmail");
const { sendEmailToContact } = require("../controllers/sendEmailToContact");
const {
  sendBookEmailConfirmation,
} = require("../controllers/sendBookEmailConfirmation");

router.post("/contactuser", contactUser);
router.get("/getcontacts", getContacts);
router.post("/sendemail", sendEmail);
router.post("/sendbookemailconfirmation", sendBookEmailConfirmation);
router.post("/sendemailtocontact", sendEmailToContact);

module.exports = router;
