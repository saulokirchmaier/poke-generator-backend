import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

import { IPokemon } from '../interface/interface';

@Entity({ name: 'pokemon' })
export class Pokemon implements IPokemon {
  @ObjectIdColumn({ name: '_id' })
  id?: ObjectID;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'pokemonId' })
  pokemonId: number;

  @Column({ name: 'timestamp' })
  timestamp?: Date;

  @Column({ name: 'picture' })
  picture: string;
}
