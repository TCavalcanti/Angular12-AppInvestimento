import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsListByClientComponent } from './investments-list-by-client.component';

describe('InvestmentsListByClientComponent', () => {
  let component: InvestmentsListByClientComponent;
  let fixture: ComponentFixture<InvestmentsListByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsListByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsListByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
