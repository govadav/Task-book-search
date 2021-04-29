import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks
} from '@sct/books/data-access';
import { FormBuilder } from '@angular/forms';
import { Book } from '@sct/shared/models';

@Component({
  selector: 'sct-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books: ReadingListBook[];
  
  searchForm = this.fb.group({
    term: ''
  });

  constructor(
    public readonly store: Store,
    private readonly fb: FormBuilder
  ) {}

  get searchTerm(): string {
    return this.searchForm.value.term;
  }

  ngOnInit(): void {
    this.store.select(getAllBooks).subscribe(books => {
      this.books = books;
    });
     
    this.searchForm.get('term').valueChanges.subscribe(value => {
      setTimeout(() => {
        this.searchBooks(value);
      }, 500);
        
      
    });

  }

  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }

  addBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
  }

  searchExample() {
   
    this.searchBooks(this.searchForm.controls.term.setValue('javascript'));
  }

  searchBooks(value){
  
    if (value) {
        this.store.dispatch(searchBooks({ term: this.searchTerm }));
      } else {
        this.store.dispatch(clearSearch());
      }
    }
  
  
}
