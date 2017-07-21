import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  bigger(ID) {
    var image = document.getElementById(ID);
    image.style.width = '800px';
    image.style.height = '800px';
  }

  ngOnInit() {
  }

}
