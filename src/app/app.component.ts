import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
  showMain = true;
  showMainProds = false;

  mostrarMain() {
    this.showMainProds = false;
  }

  mostrarMainProdsFn() {
    this.showMainProds = true;
  }
}
