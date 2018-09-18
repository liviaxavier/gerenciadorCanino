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
  responseSubBreeds:any;
  subBreeds:string[];
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
    for(let i of this.breedsList){
      if(i == e){
        if(confirm(`Tem certeza que quer apagar a raça ${e} dessa lista? :(`)) {
          let number = this.breedsList.indexOf(i)
          this.breedsList.splice(number,1)
        }
      }
    }
  }
  update(e){
  console.log(`Quero editar ${e}`)
  }
  readMore(e){
    let urlSubBreeds = 'https://dog.ceo/api/breeds/list/all';
    this.http.get(urlSubBreeds).subscribe((responseSubBreeds)=>{
      this.responseSubBreeds = responseSubBreeds;
      if(this.responseSubBreeds.status == 'success' ){
        this.subBreeds = this.responseSubBreeds.message[e];
        console.log(this.subBreeds)
      }
    })
    } 
  // search(){
  //   let subBreedImages = `https://dog.ceo/api/breed/${this.breedName}/${this.subBreedName}/images/random`;
  //     this.http.get(subBreedImages).subscribe((responseSubBreed)=>{
  //       this.responseSubBreed = responseSubBreed;
  //   })
  // }
}
