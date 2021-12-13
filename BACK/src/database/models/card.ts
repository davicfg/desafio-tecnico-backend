import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface CardAttributes {
  id: number;
  titulo: string;
  conteudo: string;
  lista: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CardInput extends Optional<CardAttributes, 'id'> {}
export interface CardOutput extends Required<CardAttributes> {}

class Card extends Model<CardAttributes, CardInput> implements CardAttributes{
  public id!: number
  public titulo!: string
  public conteudo!: string
  public lista!: string

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Card.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  conteudo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lista: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: true,
  sequelize: sequelizeConnection
})

export default Card
