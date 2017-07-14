import { Observable } from 'rxjs/Observable';
import { Inbox } from '../../includes/inbox';
import { HarakiriMailEmailWrapper } from './harakirimail.email.wrapper';
import { HarakiriMailInboxWrapper } from './harakirimail.inbox.wrapper';
export declare class HarakiriMail extends Inbox {
    protected requestEmail(id: string): Observable<any>;
    protected requestList(skip?: number, limit?: number): Observable<any>;
    protected wrapEmail(raw: any): HarakiriMailEmailWrapper;
    protected wrapList(raw: any): HarakiriMailInboxWrapper;
}
