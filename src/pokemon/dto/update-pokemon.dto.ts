import { OmitType } from '@nestjs/mapped-types';

import { PokemonDTO } from './pokemon.dto';

export class UpdatePokemonDTO extends OmitType(PokemonDTO, [
  'id',
  'pokemonId',
  'picture',
  'timestamp',
] as const) {}
