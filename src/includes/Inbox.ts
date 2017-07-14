import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UnirestWrapper } from '../includes/unirest.wrapper';
import { InboxWrapper } from '../includes/inbox.wrapper';
import { EmailWrapper } from '../includes/email.wrapper';

export abstract class Inbox {
    username: string;
    unirest: UnirestWrapper;

    constructor(username: string) {
        this.username = username;
        this.unirest = new UnirestWrapper();
    }

    public list(skip: number = 0, limit: number = 10): Observable<any> {
        return this.requestList(skip, limit).map(raw => this.wrapList(raw));
    };
    public email(id: string): Observable<any> {
        return this.requestEmail(id).map(raw => this.wrapEmail(raw));
    }

    protected abstract requestList(skip: number, limit: number): Observable<any>;
    protected abstract requestEmail(id: string): Observable<any>;
    protected abstract wrapList(raw: string): InboxWrapper;
    protected abstract wrapEmail(raw: string): EmailWrapper;
}