/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventListResolverService } from './event-list-resolver.service';

describe('Service: EventListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventListResolverService]
    });
  });

  it('should ...', inject([EventListResolverService], (service: EventListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
