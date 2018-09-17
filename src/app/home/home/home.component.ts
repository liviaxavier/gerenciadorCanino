import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breedName: string = "";
  response:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  search(){
    // this.http.get(`https://api.github.com/users/${this.breedName}`).subscribe((response)=>{
    //   this.response = response;
    // })
    let images = `https://dog.ceo/api/breed/${this.breedName}/images/random`;
    this.http.get(images).subscribe((response)=>{
      this.response = response;
  })
  }
}
