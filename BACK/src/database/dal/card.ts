import Card from '../models/card';
import { CardInput, CardOutput } from '../models/card';

export const create = async (payload: CardInput): Promise<CardOutput> => {
  return await Card.create(payload);
};

export const update = async (
  id: number,
  payload: Partial<CardInput>
): Promise<CardOutput> => {
  const card = await Card.findByPk(id);
  if (!card) {
    // @todo throw custom error
    throw new Error('not found');
  }
  return await (card as Card).update(payload);
};

export const getById = async (id: number): Promise<CardOutput> => {
  const card = await Card.findByPk(id);
  if (!card) {
    // @todo throw custom error
    throw new Error('not found');
  }
  return card;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedIngredientCount = await Card.destroy({
    where: { id },
  });
  return !!deletedIngredientCount;
};

export const getAll = async (): Promise<CardOutput[]> => {
  return Card.findAll();
};
