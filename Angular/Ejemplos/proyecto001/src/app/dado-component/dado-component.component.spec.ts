import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoComponentComponent } from './dado-component.component';

describe('DadoComponentComponent', () => {
  let component: DadoComponentComponent;
  let fixture: ComponentFixture<DadoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
