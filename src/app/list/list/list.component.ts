import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  response: any;
  namesArray:any[];
  active: boolean = true;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let list = "https://dog.ceo/api/breeds/list";
    this.http.get(list).subscribe((response)=>{
    this.response = response;
    this.namesArray = this.response.message;
  })
  }
  delete(e){
    for(let i of this.namesArray){
      if(i == e){
        if(confirm(`Tem certeza que quer apagar a raça ${e} dessa lista? :(`)) {
          let number = this.namesArray.indexOf(i);
          this.namesArray.splice(number,1)
        }
      }
    }
  }
}
