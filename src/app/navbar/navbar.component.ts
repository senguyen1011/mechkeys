import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  current = 'mech';

  constructor() { }

  ngOnInit(): void {
  }

  setCurrent(term: string): void {
    this.current = term;
  }
}
