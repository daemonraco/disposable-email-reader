import { Observable } from 'rxjs/Observable';

import { Inbox } from './includes/Inbox';
import { enviroment } from './configs/enviroment';

export class MailDrop extends Inbox {
    public list(skip: number = 0, limit: number = 10): Observable<any> {
        return this.unirest.get(enviroment.apis.maildrop + '/inbox/' + this.username);
    }
    public email(id: string): Observable<any> {
        return this.unirest.get(enviroment.apis.maildrop + '/inbox/' + this.username + '/' + id);
    }
}