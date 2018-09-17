import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  response: any;
  namesArray:string[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let list = "https://dog.ceo/api/breeds/list";
    this.http.get(list).subscribe((response)=>{
      this.response = response;
      this.namesArray = this.response.message;
  })
  }

}
