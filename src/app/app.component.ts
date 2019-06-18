import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'color-tool-app';

  colors = ['red', 'green', 'blue'];

  addColor(color: string) {
    console.log('color:  ', color);
    this.colors = this.colors.concat(color);
  }
}
