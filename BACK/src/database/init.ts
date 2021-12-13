import Card  from './models/card'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Card.sync({ alter: isDev })
}
export default dbInit 