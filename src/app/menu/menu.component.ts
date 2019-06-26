import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }


  know_your_company() {
    this.router.navigate(['/know-your-company']);
  }

  login(){
    this.router.navigate(['./login'])
  }

  ngOnInit() {
  }

}
