import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  fetchProducts(){
    return this.http.get('https://fir-anguar.firebaseio.com/user.json')
     
  }
}
