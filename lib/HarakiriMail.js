"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Inbox_1 = require("./includes/Inbox");
const enviroment_1 = require("./configs/enviroment");
class HarakiriMail extends Inbox_1.Inbox {
    list(skip = 0, limit = 10) {
        let query = '?skip=' + skip + '&limit=' + 10;
        return this.unirest.get(enviroment_1.enviroment.apis.harakirimail + '/inbox/' + this.username + query);
    }
    email(id) {
        return this.unirest.get(enviroment_1.enviroment.apis.harakirimail + '/email/' + id);
    }
}
exports.HarakiriMail = HarakiriMail;
