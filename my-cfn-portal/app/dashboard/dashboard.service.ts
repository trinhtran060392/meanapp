import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pair }           from './pair';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DashboardService {
  private entryPoint = 'http://localhost:3000';  // URL to web API

  constructor (private http: Http) {}

  getAll (): Observable<Pair[]> {
    return this.http.get(this.entryPoint)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}