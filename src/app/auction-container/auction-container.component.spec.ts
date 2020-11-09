import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionContainerComponent } from './auction-container.component';

describe('AuctionContainerComponent', () => {
  let component: AuctionContainerComponent;
  let fixture: ComponentFixture<AuctionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
