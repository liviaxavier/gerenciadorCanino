import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input() info:string;
  @Input() img:string;
  @Input() listSubBreeds:string[];
  response:any;
  subBreedImages:any;
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    let images = `https://dog.ceo/api/breed/${this.info}/images/random`;
      this.http.get(images).subscribe((response)=>{
        this.response = response;
        this.subBreedImages = this.response.message;
        console.log(this.subBreedImages)
      })
    
  }

}
