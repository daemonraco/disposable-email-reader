"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Inbox_1 = require("./includes/Inbox");
const enviroment_1 = require("./configs/enviroment");
class MailDrop extends Inbox_1.Inbox {
    list(skip = 0, limit = 10) {
        return this.unirest.get(enviroment_1.enviroment.apis.maildrop + '/inbox/' + this.username);
    }
    email(id) {
        return this.unirest.get(enviroment_1.enviroment.apis.maildrop + '/inbox/' + this.username + '/' + id);
    }
}
exports.MailDrop = MailDrop;
