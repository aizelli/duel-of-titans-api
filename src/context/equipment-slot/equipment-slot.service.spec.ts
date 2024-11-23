import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentSlotService } from './equipment-slot.service';

describe('EquipmentSlotService', () => {
  let service: EquipmentSlotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipmentSlotService],
    }).compile();

    service = module.get<EquipmentSlotService>(EquipmentSlotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
