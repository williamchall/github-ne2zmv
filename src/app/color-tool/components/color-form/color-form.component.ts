import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  color = new FormControl('');
  @Output() submitColor: EventEmitter<any> = new EventEmitter();
  @Input() buttonText;
  constructor() {
  }

  ngOnInit() {
  }

  doAddColor() {
    console.log('color input:  ', this.color.value);
    this.submitColor.emit(this.color.value)
    this.color.setValue('');
  }

}
