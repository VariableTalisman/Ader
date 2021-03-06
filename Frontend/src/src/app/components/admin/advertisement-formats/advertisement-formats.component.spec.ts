import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdvertisementFormatsComponent} from './advertisement-formats.component';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {ActivatedRoute} from "@angular/router";

describe('AdvertisementFormatsComponent', () => {
  let component: AdvertisementFormatsComponent;
  let fixture: ComponentFixture<AdvertisementFormatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementFormatsComponent],
      providers: [
        HttpClient,
        HttpHandler,
        JwtHelperService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return 'mock';
                },
              },
              data: {formats: 'mock'},
            },
          },
        },
        {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}
      ],
      imports: [MatTableModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
