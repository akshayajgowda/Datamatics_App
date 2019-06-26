import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourCompanyComponent } from './know-your-company.component';

describe('KnowYourCompanyComponent', () => {
  let component: KnowYourCompanyComponent;
  let fixture: ComponentFixture<KnowYourCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowYourCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
