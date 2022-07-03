import { ObjectID } from 'typeorm';
import { IPokemon } from '../interface/interface';

export class PokemonDTO implements IPokemon {
  id?: ObjectID;

  name: string;

  pokemonId: number;

  timestamp?: Date;

  picture: string;
}
