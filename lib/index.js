"use strict";
const email_wrapper_1 = require("./includes/email.wrapper");
const inbox_1 = require("./includes/inbox");
const inbox_wrapper_1 = require("./includes/inbox.wrapper");
const harakirimail_wrapper_1 = require("./wrappers/harakiri/harakirimail.wrapper");
const maildrop_wrapper_1 = require("./wrappers/maildrop/maildrop.wrapper");
const mailinator_wrapper_1 = require("./wrappers/mailinator/mailinator.wrapper");
module.exports = {
    HarakiriMail: harakirimail_wrapper_1.HarakiriMail,
    MailDrop: maildrop_wrapper_1.MailDrop,
    Mailinator: mailinator_wrapper_1.Mailinator,
    types: {
        EmailWrapper: email_wrapper_1.EmailWrapper,
        Inbox: inbox_1.Inbox,
        InboxWrapper: inbox_wrapper_1.InboxWrapper
    }
};
