import { Observable } from 'rxjs/Observable';
import { UnirestMask } from '../includes/UnirestMask';
export declare abstract class Inbox {
    username: string;
    unirest: UnirestMask;
    constructor(username: string);
    abstract list(skip: number, limit: number): Observable<any>;
    abstract email(id: string): Observable<any>;
}
