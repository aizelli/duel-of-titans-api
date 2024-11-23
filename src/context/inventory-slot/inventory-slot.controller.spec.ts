import { Test, TestingModule } from '@nestjs/testing';
import { InventorySlotController } from './inventory-slot.controller';
import { InventorySlotService } from './inventory-slot.service';

describe('InventorySlotController', () => {
  let controller: InventorySlotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventorySlotController],
      providers: [InventorySlotService],
    }).compile();

    controller = module.get<InventorySlotController>(InventorySlotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
