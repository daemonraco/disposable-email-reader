import { Observable } from 'rxjs/Observable';

import { Inbox } from '../../includes/inbox';
import { enviroment } from '../../configs/enviroment';
import { MailDropEmailWrapper } from './maildrop.email.wrapper';
import { MailDropInboxWrapper } from './maildrop.inbox.wrapper';

export class MailDrop extends Inbox {
    protected requestEmail(id: string): Observable<any> {
        return this.unirest.get(enviroment.apis.maildrop + '/inbox/' + this.username + '/' + id);
    }
    protected requestList(skip: number = 0, limit: number = 10): Observable<any> {
        return this.unirest.get(enviroment.apis.maildrop + '/inbox/' + this.username);
    }
    protected wrapEmail(raw: any): MailDropEmailWrapper {
        return new MailDropEmailWrapper(raw);
    }
    protected wrapList(raw: any): MailDropInboxWrapper {
        return new MailDropInboxWrapper(raw);
    }
}