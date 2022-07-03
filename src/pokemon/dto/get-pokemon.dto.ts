import { PartialType } from '@nestjs/mapped-types';

import { IPokemon } from '../interface/interface';
import { PokemonDTO } from './pokemon.dto';

export class CreatePokemonDTO extends PartialType(PokemonDTO) {
  constructor(data: IPokemon) {
    super();

    this.id = data.id;
    this.name = data.name;
    this.pokemonId = data.pokemonId;
    this.timestamp = data.timestamp;
    this.picture = data.picture;
  }
}
