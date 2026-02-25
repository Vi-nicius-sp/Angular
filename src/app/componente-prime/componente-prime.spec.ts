import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePrime } from './componente-prime';

describe('ComponentePrime', () => {
  let component: ComponentePrime;
  let fixture: ComponentFixture<ComponentePrime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePrime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePrime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
