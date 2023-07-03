import { TestBed } from '@angular/core/testing';

import { VerifyjwtInterceptor } from './verifyjwt.interceptor';

describe('VerifyjwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      VerifyjwtInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: VerifyjwtInterceptor = TestBed.inject(VerifyjwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
