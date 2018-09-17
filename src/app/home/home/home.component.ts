import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breedName: string;
  subBreedName:string;
  subBreeds: string[];
  response:any;
  responseSubBreed:any;
  subBreed:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  seeSubBreeds(){
      let images = `https://dog.ceo/api/breed/${this.breedName}/list`;
      this.http.get(images).subscribe((response)=>{
        this.response = response;
        this.subBreeds = this.response.message;
    })
  }
  search(){
    let subBreedImages = `https://dog.ceo/api/breed/${this.breedName}/${this.subBreedName}/images/random`;
      this.http.get(subBreedImages).subscribe((responseSubBreed)=>{
        this.responseSubBreed = responseSubBreed;
    })
  }
}
