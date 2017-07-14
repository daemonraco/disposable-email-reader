import { Observable } from 'rxjs/Observable';
import { Inbox } from '../../includes/inbox';
import { MailDropEmailWrapper } from './maildrop.email.wrapper';
import { MailDropInboxWrapper } from './maildrop.inbox.wrapper';
export declare class MailDrop extends Inbox {
    protected requestEmail(id: string): Observable<any>;
    protected requestList(skip?: number, limit?: number): Observable<any>;
    protected wrapEmail(raw: any): MailDropEmailWrapper;
    protected wrapList(raw: any): MailDropInboxWrapper;
}
