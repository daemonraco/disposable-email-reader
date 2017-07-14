import { Observable } from 'rxjs/Observable';
import { Inbox } from './includes/Inbox';
export declare class MailDrop extends Inbox {
    list(skip?: number, limit?: number): Observable<any>;
    email(id: string): Observable<any>;
}
