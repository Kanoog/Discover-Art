import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Contacter } from '../Contacter';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private apiUrlSub = 'http://localhost:5000/contacter';

  constructor(private http:HttpClient) { }

  addSubscriber(customer: Contacter): Observable<Contacter>{
    return this.http.post<Contacter>(this.apiUrlSub, customer, httpOptions);
  }
}
