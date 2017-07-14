import { Component, OnInit } from '@angular/core';

import { BlogNavComponent } from './blog-nav/blog-nav.component';

declare var $:any;  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  
  title = 'wsq blog';
  
  constructor() {
      	
  }

  ngOnInit() {}

}
