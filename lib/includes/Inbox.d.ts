import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UnirestWrapper } from '../includes/unirest.wrapper';
import { InboxWrapper } from '../includes/inbox.wrapper';
import { EmailWrapper } from '../includes/email.wrapper';
export declare abstract class Inbox {
    username: string;
    unirest: UnirestWrapper;
    constructor(username: string);
    list(skip?: number, limit?: number): Observable<any>;
    email(id: string): Observable<any>;
    protected abstract requestList(skip: number, limit: number): Observable<any>;
    protected abstract requestEmail(id: string): Observable<any>;
    protected abstract wrapList(raw: string): InboxWrapper;
    protected abstract wrapEmail(raw: string): EmailWrapper;
}
