"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../definitions/unirest.d.ts" />
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
const unirest = require("unirest");
class UnirestWrapper {
    get(url) {
        return Observable_1.Observable.create((observer) => {
            unirest.get(url).end((response) => {
                if (response.status === 200) {
                    observer.next(response);
                }
                else {
                    observer.error(response);
                }
                observer.complete();
            });
        }).map((d) => d.body);
    }
}
exports.UnirestWrapper = UnirestWrapper;
