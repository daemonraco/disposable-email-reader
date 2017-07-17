import { Observable } from 'rxjs/Observable';
import { Inbox } from '../../includes/inbox';
import { MailinatorEmailWrapper } from './mailinator.email.wrapper';
import { MailinatorInboxWrapper } from './mailinator.inbox.wrapper';
export declare class Mailinator extends Inbox {
    protected requestEmail(id: string): Observable<any>;
    protected requestList(skip?: number, limit?: number): Observable<any>;
    protected wrapEmail(raw: any): MailinatorEmailWrapper;
    protected wrapList(raw: any): MailinatorInboxWrapper;
}
