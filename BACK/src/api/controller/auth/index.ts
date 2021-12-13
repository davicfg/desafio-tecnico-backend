import jwt from 'jsonwebtoken'
import { LoginDTO } from '../../dto/auth.dto'

export const login = async(payload: LoginDTO): Promise<any> => {
  if(payload.login === process.env.LOGIN && payload.senha === process.env.SENHA){
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return { auth: true, token: token }
  }
  return { auth: false}
}