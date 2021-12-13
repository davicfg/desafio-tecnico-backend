import jwt from 'jsonwebtoken'
import { LoginDTO } from '../../dto/auth.dto'

export const login = async(payload: LoginDTO): Promise<any> => {
  if(payload.login === process.env.LOGIN && payload.senha === process.env.SENHA){
      const token = jwt.sign({ }, process.env.SECRET, {
        expiresIn: 60 // expires in 5min
      });
      return { auth: true, token: token }
  }
  return { auth: false}
}