import { Module } from '@nestjs/common';
import { ExperienceLevelsService } from './experience-levels.service';
import { ExperienceLevelsController } from './experience-levels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceLevel } from './entities/experience-level.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ExperienceLevel])
  ],
  controllers: [ExperienceLevelsController],
  providers: [ExperienceLevelsService],
})
export class ExperienceLevelsModule {}
