import { PartialType } from '@nestjs/mapped-types';
import { CreateExperienceLevelDto } from './create-experience-level.dto';

export class UpdateExperienceLevelDto extends PartialType(CreateExperienceLevelDto) {}
