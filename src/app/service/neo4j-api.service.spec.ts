import { TestBed } from '@angular/core/testing';

import { Neo4jApiService } from './neo4j-api.service';

describe('Neo4jApiService', () => {
  let service: Neo4jApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Neo4jApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
