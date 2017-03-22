import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpService {
    constructor (private http: Http) {

    }

    sendCharData(user: any) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.put('https://angulartest-d0269.firebaseio.com/charData.json', body, {headers: headers});
    }
}