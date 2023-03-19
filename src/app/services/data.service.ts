import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {  }

  getPosts(){
    let url: string = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get<any[]>(url)
      .pipe(
        tap (posts => console.log(posts) )
      );
  }
}
