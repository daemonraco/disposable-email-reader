"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailWrapper {
    constructor(raw) {
        this.data = {
            body: false,
            date: false,
            from: false,
            id: false,
            subject: false,
            to: false
        };
        this.raw = raw;
        this.load();
    }
    body() {
        return this.data.body;
    }
    date() {
        return this.data.date;
    }
    from() {
        return this.data.from;
    }
    id() {
        return this.data.id;
    }
    subject() {
        return this.data.subject;
    }
    to() {
        return this.data.to;
    }
}
exports.EmailWrapper = EmailWrapper;
