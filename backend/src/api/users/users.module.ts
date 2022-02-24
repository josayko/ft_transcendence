import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatsRedirection, UsersController } from './users.controller';
import { StatsModule } from '../stats/stats.module';
import UsersService from './users.service';
import User from './entities/user.entity';
import Stats from '../stats/entities/stats.entity';

@Module({
  imports: [StatsModule, TypeOrmModule.forFeature([User, Stats])],
  controllers: [UsersController, StatsRedirection],
  providers: [UsersService],
})
export class UsersModule {}
