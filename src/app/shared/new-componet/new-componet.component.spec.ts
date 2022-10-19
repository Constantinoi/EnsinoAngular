import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponetComponent } from './new-componet.component';

describe('NewComponetComponent', () => {
  let component: NewComponetComponent;
  let fixture: ComponentFixture<NewComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
