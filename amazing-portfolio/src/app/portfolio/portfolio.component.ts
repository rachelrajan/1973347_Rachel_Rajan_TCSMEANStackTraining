import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  list: Array<any> = new Array();
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  saveData(name:any, num:any){
    return this.list.push(name,num);
    
  }
   
}
