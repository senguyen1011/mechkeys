import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Mech } from '../mech';
import { MechService } from '../mech.service';

@Component({
  selector: 'app-mech-search',
  templateUrl: './mech-search.component.html',
  styleUrls: ['./mech-search.component.css']
})
export class MechSearchComponent implements OnInit {
  mechs$: Observable<Mech[]>;
  private searchTerms = new Subject<string>();

  constructor(private mechService: MechService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.mechs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.mechService.searchMechs(term)),
    );
  }
}
