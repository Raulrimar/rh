import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServidorComponent } from './form-servidor.component';

describe('FormServidorComponent', () => {
  let component: FormServidorComponent;
  let fixture: ComponentFixture<FormServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormServidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
