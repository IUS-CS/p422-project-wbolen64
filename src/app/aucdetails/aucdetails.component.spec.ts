import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AucdetailsComponent } from './aucdetails.component';

describe('AucdetailsComponent', () => {
  let component: AucdetailsComponent;
  let fixture: ComponentFixture<AucdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AucdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AucdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
