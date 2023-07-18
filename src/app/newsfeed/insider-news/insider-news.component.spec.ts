import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsiderNewsComponent } from './insider-news.component';

describe('InsiderNewsComponent', () => {
  let component: InsiderNewsComponent;
  let fixture: ComponentFixture<InsiderNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsiderNewsComponent]
    });
    fixture = TestBed.createComponent(InsiderNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
