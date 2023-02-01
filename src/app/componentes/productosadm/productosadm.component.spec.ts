import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosadmComponent } from './productosadm.component';

describe('ProductosadmComponent', () => {
  let component: ProductosadmComponent;
  let fixture: ComponentFixture<ProductosadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
