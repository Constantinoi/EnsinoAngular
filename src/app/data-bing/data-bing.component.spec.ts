import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBingComponent } from './data-bing.component';

describe('DataBingComponent', () => {
  let component: DataBingComponent;
  let fixture: ComponentFixture<DataBingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
