"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inbox_1 = require("../../includes/inbox");
const enviroment_1 = require("../../configs/enviroment");
const mailinator_email_wrapper_1 = require("./mailinator.email.wrapper");
const mailinator_inbox_wrapper_1 = require("./mailinator.inbox.wrapper");
class Mailinator extends inbox_1.Inbox {
    requestEmail(id) {
        return this.unirest.get(enviroment_1.enviroment.apis.mailinator + '/fetch_email?msgid=' + id + '&zone=public');
    }
    requestList(skip = 0, limit = 10) {
        //let query = '?skip=' + skip + '&limit=' + 10;
        return this.unirest.get(enviroment_1.enviroment.apis.mailinator + '/fetch_inbox?to=' + this.username + '&zone=public');
    }
    wrapEmail(raw) {
        return new mailinator_email_wrapper_1.MailinatorEmailWrapper(raw);
    }
    wrapList(raw) {
        return new mailinator_inbox_wrapper_1.MailinatorInboxWrapper(raw);
    }
}
exports.Mailinator = Mailinator;
