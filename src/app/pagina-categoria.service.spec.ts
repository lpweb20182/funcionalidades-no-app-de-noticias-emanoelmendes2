import { TestBed } from '@angular/core/testing';

import { PaginaCategoriaService } from './pagina-categoria.service';

describe('PaginaCategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginaCategoriaService = TestBed.get(PaginaCategoriaService);
    expect(service).toBeTruthy();
  });
});
