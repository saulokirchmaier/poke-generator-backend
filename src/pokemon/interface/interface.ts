import { ObjectID } from 'typeorm';

export interface IPokemon {
  id?: ObjectID;

  name: string;

  pokemonId: number;

  timestamp?: Date;

  picture: string;
}
