import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  breedsList:string[];
  response: any;
  breedsName: any[];

  constructor(private http: HttpClient) { 
    let urlBreeds = 'https://dog.ceo/api/breeds/list';
    this.http.get(urlBreeds).subscribe((response)=>{
      this.response = response;
      if(this.response.status == 'success' ){
        this.breedsList = this.response.message;
      }
    })
  }
  delete(e){
    for(let i in this.breedsList){
      if(this.breedsList[i] == e){
        if(confirm(`Tem certeza que quer apagar a raça ${e} dessa lista? :(`)) {
          this.breedsList.splice(i,1)
        }
      }
    }
  }
}
