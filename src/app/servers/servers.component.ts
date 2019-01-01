import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element style
  //selector: '[app-servers]'', bala: this syntax makes us to use as a attribute in html ex: <div app-servers></div>
  //selector: '.app-servers', bala: also as a class in html tag ex: <div class=".app-servers"></div>
  //selector by id or hovering id does not work
  templateUrl: './servers.component.html',
  //template: `
  // <app-server></app-server`      Bala: alternateively you can define template and write html code instead referring to external file as above statement
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
