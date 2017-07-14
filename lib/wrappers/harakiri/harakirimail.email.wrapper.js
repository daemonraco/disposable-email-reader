"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_wrapper_1 = require("../../includes/email.wrapper");
class HarakiriMailEmailWrapper extends email_wrapper_1.EmailWrapper {
    body() {
        return typeof this.raw.bodyhtml !== 'undefined' ? this.raw.bodyhtml : this.raw.bodytext;
    }
    date() {
        return this.raw.received;
    }
    from() {
        return this.raw.from;
    }
    id() {
        return this.raw._id;
    }
    subject() {
        return this.raw.subject;
    }
    to() {
        return this.raw.to;
    }
}
exports.HarakiriMailEmailWrapper = HarakiriMailEmailWrapper;
