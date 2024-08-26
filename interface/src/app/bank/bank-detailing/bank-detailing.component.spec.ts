import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailingComponent } from './bank-detailing.component';

describe('BankDetailingComponent', () => {
  let component: BankDetailingComponent;
  let fixture: ComponentFixture<BankDetailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankDetailingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDetailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
