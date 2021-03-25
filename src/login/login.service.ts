import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  create(createLoginDto: CreateLoginDto) {
    if (!createLoginDto.user) {
      throw new BadRequestException(
        'A informação de usuário não foi encontrado na requisição',
      );
    }
    if (!createLoginDto.password) {
      throw new BadRequestException(
        'A informação de senha não foi encontrada na requisição',
      );
    }

    return {
      jwt:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImNsaWVudGUiLCJndWlkIjoiNDFkYTI2MDktNTM0Yi00NDdhLWJjZTctZWY1OWI1YWM0YTIwIiwiaWF0IjoxNTE2MjM5MDIyfQ.pBGx13coDVFTeTN67QDo_n7m9PRmmiGlDDo7ilDtLtQ',
    };
  }
}
