import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaChistesComponent } from './pagina-chistes.component';

describe('PaginaChistesComponent', () => {
  let component: PaginaChistesComponent;
  let fixture: ComponentFixture<PaginaChistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaChistesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaChistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
