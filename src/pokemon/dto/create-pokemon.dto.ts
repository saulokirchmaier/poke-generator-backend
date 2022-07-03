import { OmitType } from '@nestjs/mapped-types';

import { PokemonDTO } from './pokemon.dto';

export class CreatePokemonDTO extends OmitType(PokemonDTO, [
  'id',
  'timestamp',
] as const) {}
