import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtudinantComponent } from './update-etudinant.component';

describe('UpdateEtudinantComponent', () => {
  let component: UpdateEtudinantComponent;
  let fixture: ComponentFixture<UpdateEtudinantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtudinantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEtudinantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
