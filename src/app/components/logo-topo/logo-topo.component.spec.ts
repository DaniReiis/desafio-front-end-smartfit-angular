import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTopoComponent } from './logo-topo.component';

describe('LogoTopoComponent', () => {
  let component: LogoTopoComponent;
  let fixture: ComponentFixture<LogoTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTopoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
