import { Component, OnInit } from '@angular/core';

import { Mech } from '../mech';
import { MechService } from '../mech.service';

@Component({
  selector: 'app-mech-list',
  templateUrl: './mech-list.component.html',
  styleUrls: ['./mech-list.component.css']
})
export class MechListComponent implements OnInit {
  mechs: Mech[];
  name: string;
  form = "All Form Factors";

  constructor(private mechService: MechService) {}

  // Push a search term into the observable stream.
  searchName(term: string): void {
    this.name = term;
    this.search();
  }

  searchForm(term: string): void {
    this.form = term;
    this.search();
  }

  search(): void {
    if (/\S/.test(this.name) || this.form != 'All Form Factors') {
      console.log(this.name, this.form);
      this.mechService.searchMechs(this.name, this.form)
        .subscribe(mechs => this.mechs = mechs);
    } else {
      this.getMechs();
    }
  }

  ngOnInit() {
    this.getMechs();
  }

  getMechs(): void {
    this.mechService.getMechs()
      .subscribe(mechs => this.mechs = mechs);
  }
}
