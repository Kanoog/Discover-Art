import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Subscriber } from '../Subscriber';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SubscriberListService {
  private apiUrlSub = 'http://localhost:5000/subscribers';

  constructor(private http:HttpClient) { }

  addSubscriber(subscriber: Subscriber): Observable<Subscriber>{
    return this.http.post<Subscriber>(this.apiUrlSub, subscriber, httpOptions);
  }
}
