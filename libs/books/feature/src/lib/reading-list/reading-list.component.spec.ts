import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@sct/shared/testing';

import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@sct/books/feature';



describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;
 
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action to addbooks to reading list', () => {
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();
    component.removeFromReadingList( component.readingList$[0]);
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });
});
