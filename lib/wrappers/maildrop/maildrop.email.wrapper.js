"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_wrapper_1 = require("../../includes/email.wrapper");
class MailDropEmailWrapper extends email_wrapper_1.EmailWrapper {
    load() {
        if (typeof this.raw.data !== 'undefined') {
            this.data.id = this.raw.id;
            this.data.from = this.raw.sender;
            this.data.to = this.raw.recipient;
            this.data.subject = this.raw.subject;
            this.data.body = this.raw.body;
            this.data.date = this.raw.date;
        }
        else {
            console.error('MailinatorEmailWrapper Error: Unable to read data\nResponse:', this.raw);
        }
    }
}
exports.MailDropEmailWrapper = MailDropEmailWrapper;
