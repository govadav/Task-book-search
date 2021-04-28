import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTotalUnread } from '@sct/books/data-access';

@Component({
  selector: 'sct-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.scss']
})
export class TotalCountComponent implements OnInit {
  totalUnread$ = this.store.select(getTotalUnread);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {}
}
