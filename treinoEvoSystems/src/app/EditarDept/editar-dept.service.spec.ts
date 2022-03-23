import { TestBed } from '@angular/core/testing';

import { EditarDeptService } from './editar-dept.service';

describe('EditarDeptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarDeptService = TestBed.get(EditarDeptService);
    expect(service).toBeTruthy();
  });
});
