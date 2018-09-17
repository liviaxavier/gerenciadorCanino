import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.scss']
})
export class ControllersComponent implements OnInit {
  @Input() name:string;
  expandImage: boolean = false;
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
  delete(){
    console.log(`Quero deletar ${this.name}`)
  }
  expand(){
    this.expandImage = !this.expandImage;
  }


}
