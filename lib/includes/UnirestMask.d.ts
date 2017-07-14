/// <reference path="../../src/definitions/unirest.d.ts" />
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export declare class UnirestMask {
    get(url: string): Observable<any>;
}
