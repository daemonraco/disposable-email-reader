/// <reference path="../definitions/unirest.d.ts" />
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import * as unirest from "unirest"

export class UnirestWrapper {
    public get(url: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            unirest.get(url).end((response: any) => {
                if (response.status === 200) {
                    observer.next(response);
                } else {
                    observer.error(response);
                }
                observer.complete();
            });
        }).map((d: any) => d.body);
    }
}