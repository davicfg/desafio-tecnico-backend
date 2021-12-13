import * as cardDal from '../../database/dal/card'
import {CardInput, CardOutput} from '../../database/models/card'

export const create = (payload: CardInput): Promise<CardOutput> => {
    return cardDal.create(payload)
}
export const update = (id: number, payload: Partial<CardInput>): Promise<CardOutput> => {
    return cardDal.update(id, payload)
}
export const getById = (id: number): Promise<CardOutput> => {
    return cardDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return cardDal.deleteById(id)
}
export const getAll = (): Promise<CardOutput[]> => {
    return cardDal.getAll()
}