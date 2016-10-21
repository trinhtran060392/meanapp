import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { User }           from './user';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UserService {
  private entryPoint = 'http://localhost:3000';  // URL to web API

  constructor (private http: Http) {}

  list (): Observable<User[]> {
    return this.http.get(this.entryPoint + '/user/list')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  create(user: User) : Observable<User[]> {
    return this.http.post(this.entryPoint + '/user', user).catch(this.handleError);
  }

  delete(_id: string) : Observable<any> {
    return this.http.delete(this.entryPoint + '/user/'+_id);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError (error: any) {
    return Observable.throw(error);
  }

}