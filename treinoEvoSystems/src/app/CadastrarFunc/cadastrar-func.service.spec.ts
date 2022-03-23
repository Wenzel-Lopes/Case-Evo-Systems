import { TestBed } from '@angular/core/testing';

import { CadastrarFuncService } from './cadastrar-func.service';

describe('CadastrarFuncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastrarFuncService = TestBed.get(CadastrarFuncService);
    expect(service).toBeTruthy();
  });
});
