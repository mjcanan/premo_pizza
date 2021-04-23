import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEmpoyeeSalesComponent } from './order-empoyee-sales.component';

describe('OrderEmpoyeeSalesComponent', () => {
  let component: OrderEmpoyeeSalesComponent;
  let fixture: ComponentFixture<OrderEmpoyeeSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEmpoyeeSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEmpoyeeSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
