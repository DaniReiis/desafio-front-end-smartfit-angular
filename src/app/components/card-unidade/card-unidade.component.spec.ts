import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnidadeComponent } from './card-unidade.component';

describe('CardUnidadeComponent', () => {
  let component: CardUnidadeComponent;
  let fixture: ComponentFixture<CardUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUnidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
