import { TestBed } from '@angular/core/testing'; 
 
import { StorageManagementService } from '../service/storange-management-service'; 
 
describe('StorageManagementService', () => { 
  let service: StorageManagementService; 
 
  beforeEach(() => { 
    TestBed.configureTestingModule({}); 
    service = TestBed.inject(StorageManagementService); 
  }); 
 
  it('should be created', () => { 
    expect(service).toBeTruthy(); 
  }); 
});