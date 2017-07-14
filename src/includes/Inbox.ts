import { Observable } from 'rxjs/Observable';

import { UnirestMask } from '../includes/UnirestMask';

export abstract class Inbox {
    username: string;
    unirest: UnirestMask;

    constructor(username: string) {
        this.username = username;
        this.unirest = new UnirestMask();
    }

    public abstract list(skip: number, limit: number): Observable<any>;
    public abstract email(id: string): Observable<any>;
}