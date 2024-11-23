import { Test, TestingModule } from '@nestjs/testing';
import { InventorySlotService } from './inventory-slot.service';

describe('InventorySlotService', () => {
  let service: InventorySlotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventorySlotService],
    }).compile();

    service = module.get<InventorySlotService>(InventorySlotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
