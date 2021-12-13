import * as cardDal from '../../database/dal/card'
import {CardInput, CardOuput} from '../../database/models/card'

export const create = (payload: CardInput): Promise<CardOuput> => {
    return cardDal.create(payload)
}
export const update = (id: number, payload: Partial<CardInput>): Promise<CardOuput> => {
    return cardDal.update(id, payload)
}
export const getById = (id: number): Promise<CardOuput> => {
    return cardDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return cardDal.deleteById(id)
}
export const getAll = (): Promise<CardOuput[]> => {
    return cardDal.getAll()
}