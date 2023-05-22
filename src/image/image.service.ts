import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imgRepository: Repository<Image>,
  ) {}

  findOne(Id: string): Promise<Image | null> {
    return this.imgRepository.findOneBy({ Id });
  }
}
