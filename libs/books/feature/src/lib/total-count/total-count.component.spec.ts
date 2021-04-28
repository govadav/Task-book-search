import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@sct/shared/testing';

import { TotalCountComponent } from './total-count.component';
import { BooksFeatureModule } from '@sct/books/feature';

describe('TotalCountComponent', () => {
  let component: TotalCountComponent;
  let fixture: ComponentFixture<TotalCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
