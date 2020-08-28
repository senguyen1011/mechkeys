import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Mech } from '../mech';
import {MechService } from '../mech.service';

@Component({
  selector: 'app-mech-detail',
  templateUrl: './mech-detail.component.html',
  styleUrls: ['./mech-detail.component.css']
})
export class MechDetailComponent implements OnInit {
  mech: Mech;
  collapse = true;

  constructor(private route: ActivatedRoute, private mechService: MechService, private location: Location) { }

  ngOnInit(): void {
    this.getMech();
  }

  getMech(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.mechService.getMech(name)
      .subscribe(mech => this.mech = mech[0]);
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }
}
