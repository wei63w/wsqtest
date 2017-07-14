import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-blog-nav',
  templateUrl: './blog-nav.component.html',
  styleUrls: ['./blog-nav.component.css']
})
export class BlogNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


    public jumpTo(address:string):void{//
      console.log(address);
        
    // this.router.navigate(['/album']);

    }



}
