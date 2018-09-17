import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() name : string;
  response: any;
  images: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let images = `https://dog.ceo/api/breed/${this.name}/images/random`;
    this.http.get(images).subscribe((response)=>{
      this.response = response;
      this.images = this.response.message;
  })
  }

}
