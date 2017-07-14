"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnirestMask_1 = require("../includes/UnirestMask");
class Inbox {
    constructor(username) {
        this.username = username;
        this.unirest = new UnirestMask_1.UnirestMask();
    }
}
exports.Inbox = Inbox;
