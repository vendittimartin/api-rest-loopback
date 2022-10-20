import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Carrito extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'object',
  })
  Usuario?: object;

  @property({
    type: 'array',
    itemType: 'object',
  })
  ListaArticulos?: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Carrito>) {
    super(data);
  }
}

export interface CarritoRelations {
  // describe navigational properties here
}

export type CarritoWithRelations = Carrito & CarritoRelations;
