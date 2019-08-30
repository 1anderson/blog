import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizationViewComponent } from './categorization-view.component';

describe('CategorizationViewComponent', () => {
  let component: CategorizationViewComponent;
  let fixture: ComponentFixture<CategorizationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
