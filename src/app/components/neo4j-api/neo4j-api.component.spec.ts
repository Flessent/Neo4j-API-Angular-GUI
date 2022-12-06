import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neo4jApiComponent } from './neo4j-api.component';

describe('Neo4jApiComponent', () => {
  let component: Neo4jApiComponent;
  let fixture: ComponentFixture<Neo4jApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Neo4jApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Neo4jApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
