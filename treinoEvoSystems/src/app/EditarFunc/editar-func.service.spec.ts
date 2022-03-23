import { TestBed } from '@angular/core/testing';

import { EditarFuncService } from './editar-func.service';

describe('EditarFuncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarFuncService = TestBed.get(EditarFuncService);
    expect(service).toBeTruthy();
  });
});
