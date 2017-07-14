"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inbox_1 = require("../../includes/inbox");
const enviroment_1 = require("../../configs/enviroment");
const maildrop_email_wrapper_1 = require("./maildrop.email.wrapper");
const maildrop_inbox_wrapper_1 = require("./maildrop.inbox.wrapper");
class MailDrop extends inbox_1.Inbox {
    requestEmail(id) {
        return this.unirest.get(enviroment_1.enviroment.apis.maildrop + '/inbox/' + this.username + '/' + id);
    }
    requestList(skip = 0, limit = 10) {
        return this.unirest.get(enviroment_1.enviroment.apis.maildrop + '/inbox/' + this.username);
    }
    wrapEmail(raw) {
        return new maildrop_email_wrapper_1.MailDropEmailWrapper(raw);
    }
    wrapList(raw) {
        return new maildrop_inbox_wrapper_1.MailDropInboxWrapper(raw);
    }
}
exports.MailDrop = MailDrop;
