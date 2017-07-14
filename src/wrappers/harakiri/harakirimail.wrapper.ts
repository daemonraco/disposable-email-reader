import { Observable } from 'rxjs/Observable';

import { Inbox } from '../../includes/inbox';
import { enviroment } from '../../configs/enviroment';
import { HarakiriMailEmailWrapper } from './harakirimail.email.wrapper';
import { HarakiriMailInboxWrapper } from './harakirimail.inbox.wrapper';

export class HarakiriMail extends Inbox {
    protected requestEmail(id: string): Observable<any> {
        return this.unirest.get(enviroment.apis.harakirimail + '/email/' + id);
    }
    protected requestList(skip: number = 0, limit: number = 10): Observable<any> {
        let query = '?skip=' + skip + '&limit=' + 10;

        return this.unirest.get(enviroment.apis.harakirimail + '/inbox/' + this.username + query);
    }
    protected wrapEmail(raw: any): HarakiriMailEmailWrapper {
        return new HarakiriMailEmailWrapper(raw);
    }
    protected wrapList(raw: any): HarakiriMailInboxWrapper {
        return new HarakiriMailInboxWrapper(raw);
    }
}