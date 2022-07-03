import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { Pokemon } from './pokemon/entities/pokemon.entity';
import { PokemonModule } from './pokemon/pokemon.module';
import mongoConfig from './config/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [mongoConfig] }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.HTTP_HOST,
      database: process.env.DATA_BASE,
      entities: [Pokemon],
      synchronize: true,
    }),
    PokemonModule,
  ],
})
export class AppModule {}
