"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inbox_1 = require("../../includes/inbox");
const enviroment_1 = require("../../configs/enviroment");
const harakirimail_email_wrapper_1 = require("./harakirimail.email.wrapper");
const harakirimail_inbox_wrapper_1 = require("./harakirimail.inbox.wrapper");
class HarakiriMail extends inbox_1.Inbox {
    requestEmail(id) {
        return this.unirest.get(enviroment_1.enviroment.apis.harakirimail + '/email/' + id);
    }
    requestList(skip = 0, limit = 10) {
        let query = '?skip=' + skip + '&limit=' + 10;
        return this.unirest.get(enviroment_1.enviroment.apis.harakirimail + '/inbox/' + this.username + query);
    }
    wrapEmail(raw) {
        return new harakirimail_email_wrapper_1.HarakiriMailEmailWrapper(raw);
    }
    wrapList(raw) {
        return new harakirimail_inbox_wrapper_1.HarakiriMailInboxWrapper(raw);
    }
}
exports.HarakiriMail = HarakiriMail;
