import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedComponentComponent } from './recommended-component.component';

describe('RecommendedComponentComponent', () => {
  let component: RecommendedComponentComponent;
  let fixture: ComponentFixture<RecommendedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
