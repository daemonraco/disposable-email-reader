import { Observable } from 'rxjs/Observable';

import { Inbox } from './includes/Inbox';
import { enviroment } from './configs/enviroment';

export class HarakiriMail extends Inbox {
    public list(skip: number = 0, limit: number = 10): Observable<any> {
        let query = '?skip=' + skip + '&limit=' + 10;

        return this.unirest.get(enviroment.apis.harakirimail + '/inbox/' + this.username + query);
    }
    public email(id: string): Observable<any> {
        return this.unirest.get(enviroment.apis.harakirimail + '/email/' + id);
    }
}