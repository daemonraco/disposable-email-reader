"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inbox_wrapper_1 = require("../../includes/inbox.wrapper");
class HarakiriMailInboxWrapper extends inbox_wrapper_1.InboxWrapper {
    ids() {
        let out = [];
        for (let k in this.raw.emails) {
            out.push(this.raw.emails[k]._id);
        }
        return out;
    }
    list() {
        let out = [];
        for (let k in this.raw.emails) {
            let entry = this.raw.emails[k];
            out.push({
                id: entry._id,
                from: entry.from,
                subject: entry.subject,
                date: entry.received
            });
        }
        return out;
    }
}
exports.HarakiriMailInboxWrapper = HarakiriMailInboxWrapper;
