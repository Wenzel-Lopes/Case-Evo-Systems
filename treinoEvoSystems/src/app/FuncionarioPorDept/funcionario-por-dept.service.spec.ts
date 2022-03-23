import { TestBed } from '@angular/core/testing';

import { FuncionarioPorDeptService } from './funcionariopordept.service';

describe('FuncionarioPorDeptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioPorDeptService = TestBed.get(FuncionarioPorDeptService);
    expect(service).toBeTruthy();
  });
});
