"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
const unirest_wrapper_1 = require("../includes/unirest.wrapper");
class Inbox {
    constructor(username) {
        this.username = username;
        this.unirest = new unirest_wrapper_1.UnirestWrapper();
    }
    list(skip = 0, limit = 10) {
        return this.requestList(skip, limit).map(raw => this.wrapList(raw));
    }
    ;
    email(id) {
        return this.requestEmail(id).map(raw => this.wrapEmail(raw));
    }
}
exports.Inbox = Inbox;
