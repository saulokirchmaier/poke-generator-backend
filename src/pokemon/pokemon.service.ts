import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

import { CreatePokemonDTO } from './dto/create-pokemon.dto';
import { PokemonDTO } from './dto/pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async create(payload: CreatePokemonDTO): Promise<PokemonDTO> {
    try {
      const pokemon = new Pokemon();
      pokemon.name = payload.name;
      pokemon.pokemonId = payload.pokemonId;
      pokemon.timestamp = new Date();
      pokemon.picture = payload.picture;

      const doc = await this.pokemonRepository.save(pokemon);

      return doc;
    } catch (error) {
      throw new BadRequestException('Requisição inválida');
    }
  }

  async findAll(): Promise<PokemonDTO[]> {
    try {
      return this.pokemonRepository.find();
    } catch (error) {
      throw new BadRequestException('Requisição inválida');
    }
  }

  async findOne(id: string): Promise<PokemonDTO> {
    try {
      const doc = await this.pokemonRepository.findOneOrFail({
        where: { _id: new ObjectID(id) },
      });

      return doc;
    } catch (error) {
      throw new NotFoundException('Pokemon não encontrado');
    }
  }

  async update(id: string, name: string): Promise<PokemonDTO> {
    try {
      const pokemon = await this.pokemonRepository.findOne({
        where: { _id: new ObjectID(id) },
      });

      if (!pokemon) {
        throw new NotFoundException('Não encontrado');
      }

      pokemon.name = name;

      await this.pokemonRepository.save(pokemon);

      return pokemon;
    } catch (error) {
      throw new BadRequestException('Não foi possível atualizar o pokemon');
    }
  }

  async remove(id: string): Promise<string> {
    try {
      const pokemon = await this.pokemonRepository.findOne({
        where: { _id: new ObjectID(id) },
      });

      if (!pokemon) {
        throw new NotFoundException('Não encontrado');
      }

      await this.pokemonRepository.delete(pokemon);

      return 'Pokemon deletado com sucesso';
    } catch (error) {
      throw new BadRequestException('Não foi possível deletar o pokemon');
    }
  }
}
