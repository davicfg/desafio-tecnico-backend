import * as service from '../../services/cardservice';
import { CardDTO } from '../../dto/card.dto';
import { Card } from '../../interfaces/Card.interface';
import * as mapper from './mapper';

export const create = async (payload: CardDTO): Promise<Card> => {
  return mapper.tocard(await service.create(payload));
};
export const update = async (id: number, payload: CardDTO): Promise<Card> => {
  return mapper.tocard(await service.update(id, payload));
};
export const getById = async (id: number): Promise<Card> => {
  return mapper.tocard(await service.getById(id));
};
export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async (): Promise<Card[]> => {
  return (await service.getAll()).map(mapper.tocard);
};
