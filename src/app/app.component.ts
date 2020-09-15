import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public formGroup = new FormGroup({
    date: new FormControl(null, [Validators.required])
    })
  
  constructor() {
  }

  ngOnInit() {  
  }

  getDate() {
    return moment(this.formGroup.get('date').value?.toLocaleString()).format("dddd, MMMM Do, YYYY");
   }

  getTime() {
   return moment(this.formGroup.get('date').value?.toLocaleString()).format("HH:mm:ss");
  }

  getTimestamp() {
    return moment(this.formGroup.get('date').value?.toLocaleString()).format("X");
   }
}
