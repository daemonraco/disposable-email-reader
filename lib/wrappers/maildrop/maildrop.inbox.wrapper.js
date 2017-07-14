"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inbox_wrapper_1 = require("../../includes/inbox.wrapper");
class MailDropInboxWrapper extends inbox_wrapper_1.InboxWrapper {
    ids() {
        let out = [];
        for (let k in this.raw) {
            out.push(this.raw[k].id);
        }
        return out;
    }
    list() {
        let out = [];
        for (let k in this.raw) {
            let entry = this.raw[k];
            out.push({
                id: entry.id,
                from: entry.sender,
                subject: entry.subject,
                date: entry.date
            });
        }
        /*
        DEBUG MailDropInboxWrapper {
  raw:
   [ { id: 'IvqK1x',
       sender: 'alejandro.dario.simi@accenture.com',
       subject: 'test ',
       date: 'Jul 14 2017 05:31 AM' } ] }
       */
        return out;
    }
}
exports.MailDropInboxWrapper = MailDropInboxWrapper;
