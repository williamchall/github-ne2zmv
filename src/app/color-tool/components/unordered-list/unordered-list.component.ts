import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent implements OnInit {
  @Input() items: string[] = ['r', 'g', 'b'];
 
  constructor() {
    console.log("items:  " + this.items);
  }

  ngOnInit() {
  }

  addColor(color: string) {
    this.items = this.items.concat(color);
  }
  
  
}
