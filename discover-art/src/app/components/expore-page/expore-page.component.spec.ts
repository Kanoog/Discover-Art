import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporePageComponent } from './expore-page.component';

describe('ExporePageComponent', () => {
  let component: ExporePageComponent;
  let fixture: ComponentFixture<ExporePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExporePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExporePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
