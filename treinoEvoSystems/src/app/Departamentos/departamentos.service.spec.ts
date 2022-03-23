import { TestBed } from '@angular/core/testing';

import { DepartamentosService } from './departamentos.service';

describe('DepartamentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartamentosService = TestBed.get(DepartamentosService);
    expect(service).toBeTruthy();
  });
});
