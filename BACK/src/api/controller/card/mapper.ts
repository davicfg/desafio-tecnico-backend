import { Card } from '../../interfaces/Card.interface';
import { CardOutput } from '../../../database/models/card';

export const tocard = (card: CardOutput): Card => {
  return {
    id: card.id,
    titulo: card.titulo,
    conteudo: card.conteudo,
    lista: card.lista,
    createdAt: card.createdAt,
    updatedAt: card.updatedAt,
  };
};
