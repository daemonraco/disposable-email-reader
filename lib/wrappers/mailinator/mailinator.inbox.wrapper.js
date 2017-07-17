"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inbox_wrapper_1 = require("../../includes/inbox.wrapper");
class MailinatorInboxWrapper extends inbox_wrapper_1.InboxWrapper {
    ids() {
        let out = [];
        for (let k in this.raw.messages) {
            out.push(this.raw.messages[k]._id);
        }
        return out;
    }
    list() {
        let out = [];
        for (let k in this.raw.messages) {
            let entry = this.raw.messages[k];
            out.push({
                id: entry.id,
                from: entry.fromfull,
                subject: entry.subject,
                date: entry.time
            });
        }
        return out;
    }
}
exports.MailinatorInboxWrapper = MailinatorInboxWrapper;
