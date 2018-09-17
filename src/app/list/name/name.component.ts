import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent {
  @Input() name : string;
  editMode:boolean = false;
  initial:boolean = true;
  constructor() { }
  breedName = new FormControl('');
  edit(){
    this.editMode = !this.editMode;
    this.initial = false;
  }
  confirm(){
    this.editMode = !this.editMode;
    this.name = this.breedName.value;
    console.log(this.name)
  }
}
