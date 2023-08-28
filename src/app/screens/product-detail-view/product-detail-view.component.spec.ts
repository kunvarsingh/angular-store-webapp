import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailViewComponent } from './product-detail-view.component';

describe('ProductDetailViewComponent', () => {
  let component: ProductDetailViewComponent;
  let fixture: ComponentFixture<ProductDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailViewComponent]
    });
    fixture = TestBed.createComponent(ProductDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
