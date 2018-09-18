import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  map:any;
  response: any;
  constructor(private http: HttpClient) { 
    let url = 'https://dog.ceo/api/breeds/list/all';
    this.http.get(url).subscribe((response)=>{
      this.response = response;
      console.log(response)
    })
  }
}
