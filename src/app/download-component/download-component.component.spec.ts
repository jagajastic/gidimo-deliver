import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadComponentComponent } from './download-component.component';

describe('DownloadComponentComponent', () => {
  let component: DownloadComponentComponent;
  let fixture: ComponentFixture<DownloadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
