"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_wrapper_1 = require("../../includes/email.wrapper");
class MailDropEmailWrapper extends email_wrapper_1.EmailWrapper {
    body() {
        return this.raw.body;
    }
    date() {
        return this.raw.date;
    }
    from() {
        return this.raw.sender;
    }
    id() {
        return this.raw.id;
    }
    subject() {
        return this.raw.subject;
    }
    to() {
        return this.raw.recipient;
    }
}
exports.MailDropEmailWrapper = MailDropEmailWrapper;
