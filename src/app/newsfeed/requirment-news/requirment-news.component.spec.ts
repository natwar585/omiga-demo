import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirmentNewsComponent } from './requirment-news.component';

describe('RequirmentNewsComponent', () => {
  let component: RequirmentNewsComponent;
  let fixture: ComponentFixture<RequirmentNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirmentNewsComponent]
    });
    fixture = TestBed.createComponent(RequirmentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
