import { Component, ViewChild } from '@angular/core';
import { Iplayer } from './shared/model/player';
import { cricketers } from './shared/const/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchvalue : string = '';
  selectedvalue : string = '';
  onselect(eve : HTMLSelectElement){
    // console.log(eve.value);
    
    this.selectedvalue = eve.value
  }
  players : Iplayer[] = cricketers

  title = 'myproject';

}
