import { TestBed, inject } from '@angular/core/testing';

import { JsonRpcService } from './json-rpc.service';

describe('JsonRpcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonRpcService]
    });
  });

  it('should ...', inject([JsonRpcService], (service: JsonRpcService) => {
    expect(service).toBeTruthy();
  }));
});
