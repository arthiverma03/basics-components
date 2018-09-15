import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
newserver = 12;
oldservername = 'arthi';
disablemad = false;
Message = 'you are mad';
  constructor() { setTimeout(
    () =>{ this.disablemad = true;}, 1000
  );
   }

  ngOnInit() {
  }
  Onclick(){

this.Message = 'you are not mad';
  }
}
