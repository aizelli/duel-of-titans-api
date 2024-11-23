import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentSlotController } from './equipment-slot.controller';
import { EquipmentSlotService } from './equipment-slot.service';

describe('EquipmentSlotController', () => {
  let controller: EquipmentSlotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentSlotController],
      providers: [EquipmentSlotService],
    }).compile();

    controller = module.get<EquipmentSlotController>(EquipmentSlotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
