/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userServices: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.userServices.findByEmail(userEmail);
    if (user) {
      const passwordMatch = await compare(userPassword, user.password);
      if (passwordMatch) {
        return { email: user.email };
      }
    }
    return null;
  }

  async login(email: string) {
    const user = await this.userServices.findByEmail(email);
    if (user) {
      // Retorne os detalhes do usuário (exceto a senha) junto com o token
      const { password, ...userDetails } = user; // Desestruturação para remover a senha

      return {
        token: this.jwtService.sign({ email }, { subject: user.id }),
        user: userDetails, // Retorna os detalhes do usuário (exceto a senha)
      };
    }
    return null;
  }
}
