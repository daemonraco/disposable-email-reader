import { Observable } from 'rxjs/Observable';

import { Inbox } from '../../includes/inbox';
import { enviroment } from '../../configs/enviroment';
import { MailinatorEmailWrapper } from './mailinator.email.wrapper';
import { MailinatorInboxWrapper } from './mailinator.inbox.wrapper';

export class Mailinator extends Inbox {
    protected requestEmail(id: string): Observable<any> {
        return this.unirest.get(enviroment.apis.mailinator + '/fetch_email?msgid=' + id + '&zone=public');
    }
    protected requestList(skip: number = 0, limit: number = 10): Observable<any> {
        //let query = '?skip=' + skip + '&limit=' + 10;
        return this.unirest.get(enviroment.apis.mailinator + '/fetch_inbox?to=' + this.username + '&zone=public');
    }
    protected wrapEmail(raw: any): MailinatorEmailWrapper {
        return new MailinatorEmailWrapper(raw);
    }
    protected wrapList(raw: any): MailinatorInboxWrapper {
        return new MailinatorInboxWrapper(raw);
    }
}