import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsComponent } from './sheets.component';
import { ApiService, Template, Sheet, } from '../api.service';
import {  HttpClientTestingModule} from '@angular/common/http/testing';

describe('SheetsComponent', () => {
  let component: SheetsComponent;
  let fixture: ComponentFixture<SheetsComponent>;
  let fetchTemplateSpy: any;
  let loadTemplateSpy: any;
  let fetchSheetSpy: any;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SheetsComponent],
      providers: [
        ApiService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have textElements property', () => {
    expect(component.textElements).toBeTruthy();
  });

  it('should have titleElements property', () => {
    expect(component.titleElements).toBeTruthy();
  });

  it('should have undefined templateId property', () => {
    expect(component.templateId).toBeUndefined();
  });

  it('should have undefined currentTemplate property', () => {
    expect(component.currentTemplate).toBeUndefined();
  });

  it('should have undefined sheetId property', () => {
    expect(component.sheetId).toBeUndefined();
  });

  it('should have undefined currentSheet property', () => {
    expect(component.currentSheet).toBeUndefined();
  });

  it('should call fetchTemplate', () => {
    fetchTemplateSpy = spyOn(component, 'fetchTemplate');
    component.fetchTemplate();
    expect(fetchTemplateSpy).toHaveBeenCalled();
  });

  it('should call loadTemplate', () => {
    loadTemplateSpy = spyOn(component, 'loadTemplate');
    component.loadTemplate();
    expect(loadTemplateSpy).toHaveBeenCalled();
  });

  it('should call fetchSheet', () => {
    fetchSheetSpy = spyOn(component, 'fetchSheet');
    component.fetchSheet('12345');
    expect(fetchSheetSpy).toHaveBeenCalled();
  });

});
